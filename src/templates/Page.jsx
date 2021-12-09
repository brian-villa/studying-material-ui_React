import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'


//JSS
const useStyles = makeStyles(() => ({
    container: {
        padding: "10px 0",
       
    }
}))

  

const Page = ({ title, Component }) => {

    return (
        <>
            <Typography variant="h3">
                {title}
            </Typography>
           <Component /> 
        </>
    )
}

export default Page