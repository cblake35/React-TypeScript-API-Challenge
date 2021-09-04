import React, { Component } from "react";
import Weather from './Weather'

type LocationState = {
    currentLat: number
    currentLong: number
}

type LocationProps = {
}

class MyLocation extends Component<LocationProps, LocationState> {
    constructor(props: LocationProps) {
        super(props)
        this.state = {
            currentLat: 0,
            currentLong: 0
        }
    }

    handleFetch = (): void => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showLocation);
        } else {
            console.log('Geolocation is not available.')
        }
    }


    showLocation = (position: { [k: string]: any }): void => {
        this.setState({
            currentLat: position.coords.latitude,
            currentLong: position.coords.longitude
        })
    }

    componentDidMount() {
        this.handleFetch()
    }

    render() {
        return (
            <div>
                <h1>My Local Weather</h1>
                <Weather lat={this.state.currentLat} long={this.state.currentLong} />
            </div>
        )
    }
}

export default MyLocation;

