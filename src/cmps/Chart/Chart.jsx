import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

//props: chartData 
export default class Chart extends Component {
    
    render() {
        if (!this.props.chartData) return <div className="page-loading-screen">Loading...</div>
        return (
            <div>
                <p>I am in a chart</p>
                <Sparklines data={this.props.chartData.map(data => data.y)}   width={100} height={20} margin={5}>
                    <SparklinesLine color="#c39ea0" />
                </Sparklines>
            </div>
        )
    }
}
