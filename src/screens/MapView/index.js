import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {View, Platform, BackHandler, Text} from 'react-native';
import {MapViewHeader} from '../../components';
import MapView, {Marker} from 'react-native-maps';
import {Metric} from '../../themes';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {appSettingsSelector} from '../../redux/selector';
import {AppSettingsActions} from '../../redux';
import {connect} from 'react-redux';
import {Strings} from '../../utils';
import {en, he} from '../../constants';

class MapViewScreen extends Component {
  static navigationOptions = {
    gesturesEnabled: Platform.OS !== 'ios',
  };

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      results: [],
    };
  }

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    console.info('search results', this.props.navigation.state.params.results);
    this.setState({
      language: this.props.appSettings.language,
      results: this.props.navigation.state.params.results,
    });
  }

  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    return true;
  };

  onBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {language, results} = this.state;
    const isEnglish = language === Strings.ENGLISH;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <MapViewHeader onBack={this.onBack} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MapView
              initialRegion={{
                latitude: Strings.currentLatitude,
                longitude: Strings.currentLongitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
              }}
              region={{
                latitude: Strings.currentLatitude,
                longitude: Strings.currentLongitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
              }}
              style={{
                width: Metric.width,
                height: Metric.height - Metric.searchHeaderHeight - 30,
              }}>
              {results.map(marker => (
                <Marker
                  coordinate={{
                    latitude: marker.location.coordinates[1],
                    longitude: marker.location.coordinates[0],
                  }}
                  title={marker.address}
                  description={marker.name}
                />
              ))}
            </MapView>
          </View>
        </View>
        <View
          style={{
            height: 30,
            backgroundColor: '#EDEFF1',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontFamily: 'Heebo-Bold'}}>
            {isEnglish
              ? en.memorial.all_over_the_app
              : he.memorial.all_over_the_app}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  ...appSettingsSelector(state),
});
const mapDispatchToProps = dispatch => ({
  updateDeviceStatus: isDeviceTurnON =>
    dispatch(AppSettingsActions.updateDeviceStatus(isDeviceTurnON)),
  updateLightStatus: isLightTurnON =>
    dispatch(AppSettingsActions.updateLightStatus(isLightTurnON)),
  updateLanguage: language =>
    dispatch(AppSettingsActions.updateLanguage(language)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapViewScreen);
