'use strict';

import React, {Component} from 'react'
import Reflux from 'reflux'
import {Text, TextInput, View, Button, Alert} from 'react-native'

import LoginStore from './../../stores/Login.Store'
import {Actions} from './../../actions/Login.Actions'

class Login extends Reflux.Component{
    constructor(props){
        super(props);

        this.store = LoginStore;
        this.state = {
            name: null,
            pass: null
        };
        this.handleClick = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        Alert.alert(this.state.loggedIn);
    }

    render(){
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
                    value={this.state.name}
                    placeholder='Введите ваше имя'
                    onChangeText={(text) => {
                        this.state.name = text;
                        this.setState(this.state);
                    }}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
                    value={this.state.pass}
                    placeholder='Введите ваш пароль'
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        this.state.pass = text;
                        this.setState(this.state);
                    }}
                />
                <Button
                    disabled={!this.state.name || !this.state.pass}
                    title='Вход'
                    onPress={this.handleClick}
                />
            </View>
        );
    }
};

export default Login;