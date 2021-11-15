import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Home from '../../../gastroCloud/pages/Home'
import Description from '../../../gastroCloud/pages/Description'
import Details from '../../../gastroCloud/pages/Details'

const Tab = createMaterialTopTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  )
}

export default TabNavigator
