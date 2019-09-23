import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import Creature from '../components/Creature'




class MainScreen extends Component {

    state = {
        creatureList:[],
    }

    addCreature = creature => this.setState(state => ({creatureList:[...state.creatureList, creature]}))

    render() {

        const {
            navigation
        } = this.props

        return (
            <View>
                
                <Text>mainScreen</Text>
                <Button
                    title='+'
                    onPress={() => this.props.navigation.navigate('Maker')}>
                </Button>
                {
                    (this.state.creatureList.length != 0) ? console.log(this.state.creatureList) : null
                }
                <NavigationEvents
                    onWillFocus={payload => this.addCreature(navigation.getParam('monstruito', null))}
                />
            </View>

        )
    }
}

export default MainScreen;