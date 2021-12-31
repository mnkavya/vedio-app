import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core/';

export const CommentsContainer = (props) => {
  return props.comments.map((e) => {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>{/* load/add user profile here */}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <div>
              <div>{' — ' + e.comments}</div>
              <span>{e.time}</span>
            </div>
          }
        />
      </ListItem>
    );
  });
};
