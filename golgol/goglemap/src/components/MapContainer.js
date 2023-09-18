import {GoogleMap, LoadScript, Marker}  from '@react-google-maps/api';

//googleMap allows us to render google map in any react component
//loadScript - loads the goole map API script
//Marker - identifies a location on a map

export const MapContainer = () => {

    const item = {
        name :'gomycode',
        location: {
            lat :6.498987099026346,
            lng:  3.378704765352923
        }
    }

    const mapStyles = {
        height: '400px',
        width: '100%'
    }

    const defaultCenter = {
        lat :6.498987099026346,
        lng:  3.378704765352923
    }



    return(
        <div>
        <LoadScript googleMapsApiKey='AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE'>
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
                <Marker key = {item.name} position={item.location} />
            </GoogleMap>

        </LoadScript>
        </div>
    )
}
