import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles'





//JSS
const useStyles = makeStyles(() => ({
    container: {
        padding: "10px 0",
       
    }
  }))

  

const Clean = ({ Component }) => {
    const classes = useStyles()
    return(
        <>
            <Container className={classes.container}>
                <Component />
            </Container>
        </>
    )
}

export default Clean