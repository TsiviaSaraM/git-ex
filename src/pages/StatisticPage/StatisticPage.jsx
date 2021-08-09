import React, { Component } from 'react'
import Chart from '../../cmps/Chart/Chart'
import { bitcoinService } from '../../services/bitcoinService'

export default class StatisticPage extends Component {
    state = {
        chartData: null
    }

    componentDidMount(){
        const chartData = bitcoinService.getMarketPrice()
        this.setState({chartData})
    }

    render() {
        const {chartData} = this.state
        if (!chartData) return <div className="page-loading-screen">Loading...</div>
        return (
            <div>
                <h2>Statistics Page</h2>
                <Chart chartData={chartData} />
            </div>
        )
    }
}
