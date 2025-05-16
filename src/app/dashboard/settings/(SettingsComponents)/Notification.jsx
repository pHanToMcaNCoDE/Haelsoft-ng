'use client'

import React, { useState, useEffect } from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '@/components/Loader'
import secureLocalStorage from 'react-secure-storage'
import { useSelector } from 'react-redux'

const Notification = () => {
  const [settings, setSettings] = useState({
    promotional_email: "",
    announcement: "",
    learning_progress: ""
  })
  
  const [hasChanges, setHasChanges] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const { token } = useSelector((state) => state.userDetails);

  useEffect(() => {
    const fetchSettings = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}profile/notification`, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })

        console.log('GET response:', response.data)

        setSettings((prev) => ({
          ...prev,
          promotional_email: response.data.data.promotional_email,
          announcement: response.data.data.announcement,
          learning_progress: response.data.data.learning_progress
        }))

        console.log("Notifications Page", settings)
      } catch (error) {
        console.error('Error fetching settings:', error)
        toast.error(error.response?.data?.message || 'Failed to load notification settings')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSettings()
  }, [])

  
  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: prev[setting] === "true" ? "false" : "true"
    }))
    setHasChanges(true)
  }
  
  const handleSave = async () => {
    setIsSaving(true);
    setIsLoading(true);

    try {
        const formData = new FormData();
        formData.append('promotional_email', settings.promotional_email);
        formData.append('announcement', settings.announcement);
        formData.append('learning_progress', settings.learning_progress);
        formData.append('_method', 'PUT');

        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}profile/notification`, formData, {
          headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
          }
        });
        
        console.log('Response:', response.data);

        if (response.data && response.data.status !== false) {
          toast.success(response.data.message || 'Settings saved successfully!')
          setHasChanges(false)
        } else {
          if (response.data.errors) {
            Object.values(response.data.errors).flat().forEach(msg => toast.error(msg));
          } else {
            toast.error(response.data.message || 'Failed to save settings');
          }
        }
    } catch (error) {
        toast.error(error.response?.data?.message);
        
        if (error.response?.data?.errors) {
          const errorObj = error.response.data.errors;
          Object.values(errorObj).flat().forEach(msg => toast.error(msg));
        } else {
          toast.error(error.response?.data?.message || 'Failed to save settings. Please try again.');
        }
    } finally {
      setIsSaving(false);
      setIsLoading(false);
    }
  }

  return (
    <div className='bg-white w-full px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-start items-start gap-[3em]'>
        <h1 className="px-[30px] pt-[20px] font-semibold leading-9 text-[1.5rem] text-black">
            Notification
        </h1>
        {isLoading && (
          <Loader/>
        )}
        <form 
            onSubmit={(e) => {
                e.preventDefault()
                handleSave()
            }}
            className="w-full px-4 lg:px-8 flex flex-col gap-12"
        >
            <div className="flex flex-col gap-6">
                <div className='flex flex-wrap w-full justify-between items-center gap-3'>
                  <Label htmlFor="promotional-email" className='text-grayTwo text-[1.25rem] font-medium leading-[46px]'>
                      Promotional Emails
                  </Label>
                  <Switch 
                    className='data-[state=checked]:bg-main' 
                    id="promotional-email"
                    checked={settings.promotional_email}
                    onCheckedChange={() => handleToggle('promotional_email')}
                    aria-label="Toggle promotional emails"
                  />
                </div>

                <div className='flex flex-wrap w-full justify-between items-center gap-3'>
                  <Label htmlFor="announcement" className='text-grayTwo text-[1.25rem] font-medium leading-[46px]'>
                      Announcements
                  </Label>
                  <Switch 
                    className='data-[state=checked]:bg-main' 
                    id="announcement"
                    checked={settings.announcement}
                    onCheckedChange={() => handleToggle('announcement')}
                    aria-label="Toggle announcements"
                  />
                </div>

                <div className='flex flex-wrap w-full justify-between items-center gap-3'>
                  <Label htmlFor="learning-progress" className='text-grayTwo text-[1.25rem] font-medium leading-[46px]'>
                      Learning progress
                  </Label>
                  <Switch 
                    className='data-[state=checked]:bg-main' 
                    id="learning-progress"
                    checked={settings.learning_progress}
                    onCheckedChange={() => handleToggle('learning_progress')}
                    aria-label="Toggle learning progress notifications"
                  />
                </div>
            </div>

            <div className="flex justify-end">
                <button
                className="w-[150px] h-[51px] bg-main text-white border border-main text-base font-semibold flex items-center justify-center transition-opacity disabled:opacity-50"
                type="submit"
                disabled={!hasChanges || isSaving}
                >
                {isSaving ? 'Saving...' : 'Save'}
                </button>
            </div>
        </form>
      <div className="w-full bg-main h-[1px]"></div>
    </div>
  )
}

export default Notification