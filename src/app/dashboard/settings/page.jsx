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
    <section className='w-full min-h-screen bg-[#F7F7F7] p-5 lg:p-0 flex justify-center items-center'>
      <div className='w-full xl:w-[1250px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-5 min-h-full py-[100px] px-5'>
        <SettingsTab settingsTab={settingsTab} setSettingsTab={setSettingsTab} />
        <div className='w-full lg:w-[80%]'>
          {
              settingsTab === 'Personal Information' ? (<PersonalInformation/>) :
              settingsTab === 'Password' ? (<Password/>) :
              settingsTab === 'Notification' ? (<Notification/>) :
              // settingsTab === 'Subscriptions' ? (<Subscriptions/>) : 
              settingsTab === 'Linked Accounts' ? (<LinkedAccounts/>) : 
              // settingsTab === 'Language Preference' ? (<LanguagePreference/>) : 
              <PersonalInformation/>
          }
        </div>
      </div>
    </section>
  )
}

export default Settings