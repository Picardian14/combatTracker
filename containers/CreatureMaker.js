import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class CreatureMaker extends Component {
    state = {
        hp: 0,
        ac: 0,
        condition: "none",
        initiative: 0,
    }


    render() {
        return (
            <View>
                <Text>Ingrese HP</Text>
                <TextInput
                    placeholderTextColor='#FAFAFA'
                    selectionColor='#EEEEEE'
                    multiline
                    onChangeText={text => this.setState(() => ({ hp:text }))}
                    value={this.state.text}
                    style={{
                        borderColor: 'blue',
                        backgroundColor: '#FFFFFF',
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        marginBottom: 30,
                    }}
                />
                <Text>Ingrese AC</Text>
                <TextInput
                    placeholderTextColor='#FAFAFA'
                    selectionColor='#EEEEEE'
                    multiline
                    onChangeText={text => this.setState(() => ({ ac:text }))}
                    value={this.state.text}
                    style={{
                        borderColor: 'blue',
                        backgroundColor: '#FFFFFF',
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        marginBottom: 30,
                    }}
                />
                <Text>Ingrese Iniciativa</Text>
                <TextInput
                    placeholderTextColor='#FAFAFA'
                    selectionColor='#EEEEEE'
                    multiline
                    onChangeText={text => this.setState(() => ({ initiative:text }))}
                    value={this.state.text}
                    style={{
                        borderColor: 'blue',
                        backgroundColor: '#FFFFFF',
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        marginBottom: 30,
                    }}
                />
                <Button 
                    title='Listo'
                    onPress={() => this.props.navigation.navigate('Main', {
                        monstruito:this.state})}
                />

            </View>
        )
    }
}

export default CreatureMaker;