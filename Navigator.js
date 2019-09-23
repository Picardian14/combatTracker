import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

import CreatureMaker from './containers/CreatureMaker'
import MainScreen from './containers/MainScreen'

const appNavigator = createStackNavigator({
    Main:{
        screen: MainScreen,
    },
    Maker:{
        screen: CreatureMaker,
    }
})

export default appNavigator;