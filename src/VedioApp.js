import { Button, Grid, TextField, Typography } from '@material-ui/core/';
import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import { LoadPreviousComments, localStore } from './localStorage';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  typography: {
    color: 'blue',
    variant: 'subtitle2',
  },
});

const VedioApp = () => {
  const [data, setData] = React.useState({ url: '', comments: '' });
  const [loadVideo, setloadVideo] = React.useState(false);
  const [commentList, setCommentList] = React.useState([]);
  const { url, comments } = data;
  const classes = useStyles();
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    setCommentList([]);
    if (event.target.name == 'url') {
      setloadVideo(false);
    }
  };
  const handleClick = () => {
    let error = true;
    error = ReactPlayer.canPlay(url);
    if (!error) {
      alert('Entered URL is not valid');
    } else {
      setloadVideo(true);
      const previousComments = LoadPreviousComments(data.url);
      setCommentList(previousComments);
    }
  };
  const handleComments = () => {
    localStore(data);
    setData({
      ...data,
      comments: '',
    });
    const previousComments = LoadPreviousComments(data.url);
    setCommentList(previousComments);
  };
  const commentsContainer = () => {
    return commentList.map((e) => {
      return (
        <Typography className={classes.typography}>{e.comments}</Typography>
      );
    });
  };

  return (
    <>
      <Grid container spacing={1} style={{ margin: 12 }}>
        <Grid item xs={8} style={{ marginRight: 10 }}>
          <TextField
            id="url"
            type="text"
            name="url"
            label="url"
            fullWidth
            variant={'outlined'}
            placeholder="enter url here"
            value={url}
            style={{ marginLeft: 10, marginRight: 5 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            style={{
              borderRadius: '20',
              cursor: 'pointer',
              position: 'absolute',
              marginTop: 10,
              '&:hover, &:focus': {
                backgroundColor: '#4761b5',
              },
            }}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            load
          </Button>
        </Grid>
      </Grid>
      {loadVideo && (
        <Grid container spacing={1} style={{ margin: 12 }}>
          <Grid item xs={8}>
            <ReactPlayer url={url} controls={true} playing />
          </Grid>
        </Grid>
      )}
      {loadVideo && (
        <Grid container spacing={1} style={{ margin: 12 }}>
          <Grid item xs={5} style={{ marginRight: 10 }}>
            <TextField
              id="comments"
              type="text"
              name="comments"
              label="Add comments"
              fullWidth
              placeholder="Add a comment...."
              value={comments}
              style={{ marginLeft: 10, marginRight: 5 }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{
                borderRadius: '20',
                cursor: 'pointer',
                position: 'absolute',
                marginTop: 10,
                '&:hover, &:focus': {
                  backgroundColor: '#4761b5',
                },
              }}
              variant="contained"
              color={comments ? 'primary' : 'grey'}
              onClick={handleComments}
            >
              comment
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid container spacing={1} style={{ margin: 12 }}>
        <Grid item xs={8} style={{ marginRight: 10 }}>
          {commentList.length > 0 ? commentsContainer(commentList) : ''}
        </Grid>
      </Grid>
    </>
  );
};

export default VedioApp;
