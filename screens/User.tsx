import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as CLASS from '../assets/Class'
import storage, * as STORAGEFNC from '../data/storageFunc'

export default function User() {
  return (
    <CLASS.SSBarWithSaveArea>
      <Text>User</Text>
      <TouchableOpacity
        onPress={() => {
          storage.clearMapForKey('user')
        }}>
        <Text>Clear all</Text>
      </TouchableOpacity>
    </CLASS.SSBarWithSaveArea>
  )
}