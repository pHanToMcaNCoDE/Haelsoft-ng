'use client'

import React, { useState } from 'react'
import PersonalInformation from './PersonalInformation';
import Password from './Password';
import Notification from './Notification';
import Subscriptions from './Subscriptions';
import LinkedAccounts from './LinkedAccounts';
import LanguagePreference from './LanguagePreference';

const SettingsTab = ({settingsTab, setSettingsTab}) => {

  return (
    <nav className='w-full lg:w-[20%] flex flex-col justify-start items-start gap-10'>
        <div>
            <h1 className='font-semibold leading-9 text-[1.5rem] text-black'>Account Setting</h1>
        </div>
        <ul className='font-medium text-[1.125rem] leading-[46px] text-black'>
            <li className='relative cursor-pointer' onClick={() => setSettingsTab('Personal Information')}>
                Personal Information
                {
                    settingsTab === 'Personal Information' && (
                        <div className='w-[45px] h-[4px] rounded-md bg-main duration-200'></div>
                    )
                }
            </li>
            <li className='relative cursor-pointer' onClick={() => setSettingsTab('Password')}>
                Change Password
                {
                    settingsTab === 'Password' && (
                        <div className='w-[45px] h-[4px] rounded-md bg-main duration-200'></div>
                    )
                }
            </li>
            <li className='relative cursor-pointer' onClick={() => setSettingsTab('Notification')}>
                Notification
                {
                    settingsTab === 'Notification' && (
                        <div className='w-[45px] h-[4px] rounded-md bg-main duration-200'></div>
                    )
                }
            </li>
            {/* <li className='relative cursor-pointer' onClick={() => setSettingsTab('Subscriptions')}>
                Subscriptions
                {
                    settingsTab === 'Subscriptions' && (
                        <div className='w-[45px] h-[4px] rounded-md bg-main duration-200'></div>
                    )
                }
            </li> */}
            <li className='relative cursor-pointer' onClick={() => setSettingsTab('Linked Accounts')}>
                Linked Accounts
                {
                    settingsTab === 'Linked Accounts' && (
                        <div className='w-[45px] h-[4px] rounded-md bg-main duration-200'></div>
                    )
                }
            </li>
            {/* <li className='relative cursor-pointer' onClick={() => setSettingsTab('Language Preference')}>
                Language Preference
                {
                    settingsTab === 'Language Preference' && (
                        <div className='w-[45px] h-[4px] rounded-md bg-main duration-200'></div>
                    )
                }
            </li> */}
        </ul>
    </nav>
  )
}

export default SettingsTab