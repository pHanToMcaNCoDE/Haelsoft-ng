'use client'

import React, { useState } from 'react'
import SettingsTab from './(SettingsComponents)/SettingsTab'
import PersonalInformation from './(SettingsComponents)/PersonalInformation';
import Password from './(SettingsComponents)/Password';
import Notification from './(SettingsComponents)/Notification';
import Subscriptions from './(SettingsComponents)/Subscriptions';
import LinkedAccounts from './(SettingsComponents)/LinkedAccounts';
import LanguagePreference from './(SettingsComponents)/LanguagePreference';

const Settings = () => {

  const [settingsTab, setSettingsTab] = useState('Personal Information');
  return (
    <section className='w-full py-[100px] min-h-screen bg-[#F7F7F7]'>
      <div className='max-w-[1250px] lg:p-0 p-3 mx-auto flex flex-col md:flex-row items-start justify-between gap-5 min-h-full'>
        <SettingsTab settingsTab={settingsTab} setSettingsTab={setSettingsTab} />
        <div className='w-full md:w-[70%] lg:w-auto'>
          {
              settingsTab === 'Personal Information' ? (<PersonalInformation/>) :
              settingsTab === 'Password' ? (<Password/>) :
              settingsTab === 'Notification' ? (<Notification/>) :
              settingsTab === 'Subscriptions' ? (<Subscriptions/>) : 
              settingsTab === 'Linked Accounts' ? (<LinkedAccounts/>) : 
              settingsTab === 'Language Preference' ? (<LanguagePreference/>) : 
              <PersonalInformation/>
          }
        </div>
      </div>
    </section>
  )
}

export default Settings