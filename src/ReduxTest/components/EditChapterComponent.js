import React from "react";
import {
  Box,  
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
const EditChapterComponent = (props) => {  
  const { handleChange,chapterName } = props;  
  return (
    <Box style={{ display: "flex", gap: "0.5rem" }}>
      <FormControl>
        <FormLabel>Chapter Name</FormLabel>
        <Input
          value={chapterName}
          placeholder="Enter Chapter Name"
          onChange={handleChange}
        />
      </FormControl>      
    </Box>
  );
};
export default EditChapterComponent;
