import { View, Text, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const FeedLoading = props => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
         <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Image style={{ alignSelf: 'center', height: 22, width: 22, marginRight: 10, tintColor: '#2E2684' }} source={require('../../Images/back.png')} />
          </TouchableOpacity>
          <Text style={{ color: '#2E2684', fontSize: 18, fontWeight: '600', marginLeft: 20 }}>Feedback</Text>

        </View>

      </View>
      <View style={{ flex: 1, marginHorizontal: 30, marginTop: -50, justifyContent: 'center', alignItems: 'center' }}>

<Image source={require('../../Images/thank.gif')} style={{ height: 200, width: 200, resizeMode: 'cover' }} />

<TouchableOpacity style={{ width: '40%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#000266', padding: 6, marginTop: 25 }} onPress={() =>props.navigation.navigate('Home')}>
  <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>Back  </Text>

</TouchableOpacity>




</View>
     
    </View>
  )
}

export default FeedLoading