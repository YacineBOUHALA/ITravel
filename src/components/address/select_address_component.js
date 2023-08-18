// import {
//   Autocomplete, Box, Grid, TextField, Typography,
// } from '@mui/material'
// import { debounce } from '@mui/material/utils'
// import { useEffect, useMemo, useState } from 'react';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import parse from 'autosuggest-highlight/parse';
// // import 'moment/locale/fr'

// const autocompleteService = { current: null };

// const SelectAddressComponent = ({ action, currentAddress = { geometry: null } }) => {
//   const { geometry: removedProperty, ...realValue } = currentAddress || {}
//   const [value, setValue] = useState(realValue || null);
//   const [inputValue, setInputValue] = useState('');
//   const [options, setOptions] = useState([]);

//   const adressFormat = (infos, location, formattedAdress) => {
//     const findItem = (key) => {
//       const value = infos?.find((item) => item.types.includes(key))
//       return value?.long_name
//     }

//     const newObject = {
//       housenumber: findItem('street_number'),
//       street: findItem('route'),
//       postcode: findItem('postal_code'),
//       city: findItem('locality'),
//       longitude: location.lng(),
//       latitude: location.lat(),
//       label: formattedAdress,

//     }
//     return newObject
//   }

//   const handleGetDetails = (newValue) => {
//     new window.google.maps.places.PlacesService(
//       document.createElement('div'),
//     ).getDetails(
//       {
//         placeId: newValue?.place_id,
//       },
//       (place, status) => {
//         if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//           action(adressFormat(place?.address_components, place?.geometry?.location,
// place?.formatted_address));
//         }
//       },
//     );
//   }

//   const fetch = useMemo(
//     () => debounce((request, callback) => {
//       autocompleteService.current.getPlacePredictions(request, callback);
//     }, 400),
//     [],
//   );

//   useEffect(() => {
//     let active = true;

//     if (!autocompleteService.current && window.google) autocompleteService.current
//  = new window.google.maps.places.AutocompleteService();
//     if (!autocompleteService.current) return undefined;
//     if (inputValue === '') {
//       setOptions(value ? [value] : []);
//       return undefined;
//     }

//     fetch({ input: inputValue }, (results) => {
//       if (active) {
//         let newOptions = [];
//         if (value) newOptions = [value];
//         if (results) newOptions = [...newOptions, ...results];
//         setOptions(newOptions);
//       }
//     });

//     return () => {
//       active = false;
//     };
//   }, [value, inputValue, fetch]);

//   return (
//     <Autocomplete
//       id="google-map-demo"
//       getOptionLabel={(option) => (typeof option === 'string' ? option :
// option.description)}
//       filterOptions={(x) => x}
//       options={options}
//       autoComplete
//       filterSelectedOptions
//       defaultValue={currentAddress?.label}
//       noOptionsText="Pas de résultat"
//       onChange={(event, newValue) => {
//         handleGetDetails(newValue)
//         setValue(newValue)
//       }}
//       onInputChange={(event, newInputValue) => {
//         setInputValue(newInputValue);
//       }}
//       renderInput={(params) => (
//         <TextField {...params} label="Addresse de départ" fullWidth />
//       )}
//       renderOption={(props, option) => {
//         const matches = option?.structured_formatting?.main_text_matched_substrings
//  || [];

//         const parts = parse(
//           option?.structured_formatting?.main_text,
//           matches?.map((match) => [match?.offset, match?.offset + match?.length]),
//         );

//         return (
//           <li {...props} style={{ popper: { zIndex: 999999999 } }}>
//             <Grid container alignItems="center">
//               <Grid item sx={{ display: 'flex', width: 44 }}>
//                 <LocationOnIcon sx={{ color: 'text.secondary' }} />
//               </Grid>
//               <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word',
// zIndex: 999999999 }}>
//                 {parts?.map((part, index) => (
//                   <Box
//                     key={index}
//                     component="span"
//                     sx={{ fontWeight: part?.highlight ? 'bold' : 'regular' }}
//                   >
//                     {part.text}
//                   </Box>
//                 ))}

//                 <Typography variant="body2" color="text.secondary">
//                   {option?.structured_formatting?.secondary_text}
//                 </Typography>
//               </Grid>
//             </Grid>
//           </li>
//         );
//       }}
//     />
//   );
// }

// export default SelectAddressComponent
