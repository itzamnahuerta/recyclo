import Map from './components/Map/Map'

class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            render() {
                return (
                    <div>
                        <Map component={Map} />
                    </div>
    )
            }
        }
    }
}

export default MapContainer







 