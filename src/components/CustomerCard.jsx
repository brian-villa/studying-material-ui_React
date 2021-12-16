import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import classNames from "classnames"

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'

import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'


import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from "./ModalConfirm"



const useStyles = makeStyles ((theme) => ({
  root: {
    maxWidth: 345,
  },
}))


const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCustomer,
    onEditCustomer,
}) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  const handleEditCustomer = id => {
    onEditCustomer(id)
  }

  return (
    <>
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
          <IconButton aria-label="edit user" onClick={()=>     handleEditCustomer(id)}> 
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete user" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
        title="Deseja realmente excluir este cadastro?"
        message="Ao confirmar não será possível reverter a operação."
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
      />
    </>
  );
}

export default CustomerCard