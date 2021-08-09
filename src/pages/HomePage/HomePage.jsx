import React, { Component } from 'react'
import {userService} from './../../services/userService.js'
import {bitcoinService} from './../../services/bitcoinService.js'

export default class HomePage extends Component {
    state = {
        user:null,
        rate: null,
    }

    componentDidMount(){
        let user = userService.getUser()
        this.setState({user})
        bitcoinService.getRate('USD')
            .then(rate => this.setState({rate}))
        
    }

    render() {
        const {user, rate} = this.state
        if (!user) return <div className="page-loading-screen">Loading...</div>
        return (
            <div>
                <h2>Homepage for {user.name}</h2>
               <p>user coins: {user.coins}</p>
               <p>Current bitcoin rate: {rate} </p>
               
            </div>
        )
    }
}
