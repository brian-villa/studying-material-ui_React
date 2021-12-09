import * as React from 'react'
import { makeStyles } from '@material-ui/core'
import classNames from "classnames"

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'

import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'


import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'



const useStyles = makeStyles ((theme) => ({
  root: {
    maxWidth: 345,
  },
}))


const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
    className,
}) => {
  const classes = useStyles()

  return (
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={
          <Avatar aria-label="costumer-avatar" src={avatar}>
            R
          </Avatar>
        }
        title={`${name} ${lastname}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CustomerCard