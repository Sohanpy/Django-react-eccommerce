import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import CircularProgress from "@material-ui/core/CircularProgress";

import { productsListUrl } from "../constants";

const styles = theme => ({
  // root: {
  //   flexGrow: 1
  // },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 345
  },
  bigAvatar: {
    margin: 100,
    width: 600,
    height: 600
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class ProductsList extends React.Component {
  state = {
    loading: null,
    error: null,
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(productsListUrl)
      .then(res => this.setState({ data: res.data, loading: false }))
      .catch(err => this.setState({ error: err }));
  }

  render() {
    const { data, loading, error } = this.state;
    const { classes } = this.props;
    console.log(data);

    return (
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <div style={{ marginLeft: "25px", marginTop: "5px" }}> </div>
        <Grid item xs={9} sm={7}>
          <Paper className={classes.paper}>
            {loading && (
              <div>
                <CircularProgress className={classes.progress} />
                <CircularProgress
                  className={classes.progress}
                  color="secondary"
                />
              </div>
            )}

            {data.map(item => {
              return (
                <React.Fragment key={item.id}>
                  <Card className={classes.card} raised={true}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        <div className="image">
                          <img align="right" height="170" src={item.image} />
                        </div>
                        {item.name}
                      </Typography>
                      <Typography component="p">{item.discription}</Typography>
                      <br />
                      {item.discount_price && (
                        <Chip
                          icon={<FaceIcon />}
                          label="On discount"
                          clickable
                          className={classes.chip}
                          color="primary"
                          deleteIcon={<DoneIcon />}
                          variant="outlined"
                        />
                      )}
                      {item.discount_price ? (
                        <div style={{ top: "50px", botto: "25px" }}>
                          <h3>$ {item.discount_price}</h3>
                        </div>
                      ) : (
                        <h3>$ {item.actual_price}</h3>
                      )}
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Details
                      </Button>
                    </CardActions>
                  </Card>
                  <Divider />
                </React.Fragment>
              );
            })}
          </Paper>
        </Grid>
        {/* <Grid item xs>
        <Paper className={classes.paper}>xs</Paper>
      </Grid> */}
      </Grid>
    );
  }
}
ProductsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(ProductsList);
