import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
    return (<Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#19949E', '#7FFFD4']}
        />)
}