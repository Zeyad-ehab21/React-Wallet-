import { useClerk } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import * as Linking from 'expo-linking'
import { Alert, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants/colors'

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()
  const handleSignOut = async () => {
Alert.alert("Log Out", "Are you sure you want to sign out?", [
  {text: "Cancel", style: "cancel"},
  {text: "Logout", style: "destructive" , onPress: signOut},
] )
  }
  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Ionicons name="log-out" size={24} color={COLORS.text} />
    </TouchableOpacity>
  )
}