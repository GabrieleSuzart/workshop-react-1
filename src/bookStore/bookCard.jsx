import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ShoppingCart } from '@material-ui/icons/';
import { Grid, Typography, IconButton, CardMedia } from '@material-ui/core';

class BookCard extends React.Component {
  render() {
    const { classes, book } = this.props;
    return (
      <Card className={classes.card}>
        <Grid container direction="column" justify="flex-end">
          <CardMedia
            onClick={() => alert(book.volumeInfo.title)}
            className={classes.cover}
            image={book.volumeInfo.imageLinks.smallThumbnail}
            title="Live from space album cover"
          />
          <CardContent className={classes.cardContent}>
            <Typography component="p" variant="subtitle1">
              {book.volumeInfo.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}
            </Typography>
          </CardContent>
          <div>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShoppingCart />
            </IconButton>
          </div>
        </Grid>
      </Card>
    );
  }
}

BookCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  card: {
    height: 350,
    width: 250,
    cursor: 'pointer'
  },
  cardContent: {
    height: 75
  },
  cover: {
    height: 0.55 * 350,
    width: 250
  }
});

export default withStyles(styles)(BookCard);