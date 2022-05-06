import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  InputGroup,
  Stack,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function CreateEventForm() {
  const [genres, setGenres] = useState([]);
  const [values, setValues] = useState({
    name: '',
    description: '',
    genres,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleGenresChange = (e) => {
    switch (e.target.value) {
    }
    if (!genres.includes(Number(e.target.value))) {
      setGenres((currentGenres) => [...currentGenres, Number(e.target.value)]);
    } else {
      console.log(
        `there is already ${
          e.target.children[e.target.value].textContent
        } in the selected genres`
      );
    }
    setValues({ ...values, genres });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(values));
    // setGenres([]);
    // setValues({ ...values, name: '', description: '' });
  };
  console.log('values', values);
  console.log('genres', genres);
  console.log('genres', genres);
  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={onFormSubmit}>
        <Stack spacing={5}>
          <FormControl>
            <FormLabel htmlFor="name">Name event</FormLabel>
            <Input
              id="name"
              type="text"
              value={values.name}
              onChange={handleInputChange}
            />
            {/* <FormHelperText>We`ll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="eventImage">Event images</FormLabel>
            <Input
              id="eventImage"
              type="file"
              style={{
                paddingBlock: '.65rem',
                paddingInline: '1rem',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            />
            {/* <FormHelperText>We`ll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">Email address</FormLabel>
            <Textarea
              id="description"
              placeholder="Event description"
              value={values.description}
              onChange={handleInputChange}
            />
            {/* <FormHelperText>We`ll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel>Musik genre dalam event</FormLabel>
            <Select
              id="genres"
              placeholder="Select genre"
              onChange={handleGenresChange}
            >
              <option value={1} alt="Metal">
                Metal
              </option>
              <option value={2} alt="Pop">
                Pop
              </option>
              <option value={3} alt="Rock">
                Rock
              </option>
              <option value={4} alt="Jazz">
                Jazz
              </option>
            </Select>
          </FormControl>
          <FormControl>
            <Button type="submit" paddingInline={10}>
              SUBMIT
            </Button>
          </FormControl>
        </Stack>
      </form>
    </div>
  );
}
