import {Button, Chip, Grid, Stack, Typography} from "@mui/material";
import {Fragment, useState} from "react";
import {useNavigate} from "react-router-dom";

export const TagList = ({ tags }) => {
  const [ selectedTags, setSelectedTags ] = useState([]);
  const navigate = useNavigate();

  const handleToggle = (tag) => {
    const currentIndex = selectedTags.indexOf(tag);
    const newSelectedTags = [...selectedTags];

    if ( currentIndex === -1 ) {
      newSelectedTags.push(tag);
    } else {
      newSelectedTags.splice(currentIndex, 1);
    }

    setSelectedTags( newSelectedTags );
  }

  const handleNext = () => {
    localStorage.setItem( 'selectedTags', JSON.stringify( selectedTags ));
    navigate( '/auth/location-select' );
  }

  return (
    <Fragment>
      <Grid container spacing={2} px={ 4 }>
        {
          tags.map( (tag) => (
            <Grid item xs={ 3 } key={ tag }>
              <Chip 
                label={ tag }
                onClick={ () => handleToggle( tag ) }
                color={ selectedTags.includes(tag) ? 'primary' : 'default' }
              />
            </Grid>
          ))
        }
      </Grid>


          <Button
            variant="contained"
            fullWidth
            sx={{ borderRadius: 50, mt: 5 }}
            onClick={ handleNext }
          >
            <Typography
              variant="h2"
              sx={{ p: 1 }}
            >
              Siguiente
            </Typography>
          </Button>
    </Fragment>
  );
}
