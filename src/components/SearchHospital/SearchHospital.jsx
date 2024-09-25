import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Component to search the hospitals based on State and City selection.
//API used to fetch details of hospital and set the values in formData
export default function SearchHospital() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const data = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(data.data);
        // console.log("city", data.data);
      } catch (error) {
        console.log("Error in fetching city:", error);
      }
    };

    if (formData.state != "") {
      fetchCities();
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
{/* 
1. displayEmpty: this prop ensures that if the state value in formData is empty, the select input will still display a placeholder or some indication that no selection has been made.
                 
   Here it will show this:
                  <MenuItem disabled value="" selected>
                    State
                  </MenuItem>

2. startAdornment: adds a SearchIcon at the start of the select input, 
*/}
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
        // The disableElevation prop in the Material-UI Button component is used to remove the box shadow (elevation) that is typically applied to contained buttons.
      >
        Search
      </Button>
    </Box>
  );
}


/*
Notes:

1. <MenuItem disabled value="" selected> State </MenuItem>

    disabled: disabled prop makes the MenuItem non-interactive. Users cannot select this option.
    value="": Sets the value of the MenuItem to an empty string. This matches the initial state before a real selection is made.
    selected: This prop is used to pre-select this MenuItem when the Select component is initially rendered. This indicates to users that they need to make a selection.

*/