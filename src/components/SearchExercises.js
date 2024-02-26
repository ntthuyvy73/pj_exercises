import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("exercises/bodyPartList");
    //  console.log(bodyPartsData);

      setBodyParts(['all',...bodyPartsData]);
      console.log(bodyParts);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const data = await fetchData("exercises");

      const searchData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchData);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p={2} mt={4}>
      <Typography variant="h3" fontWeight="700" mb="50px" textAlign="center">
        Awesome Exercises You Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: {
              lg: "800px",
              sx: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />

        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            height: "56px",
            position: "absolute",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
