import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      textTransform: "none",
      fontSize: "1rem",
      padding: 10,
    },
  })
);

export default useStyles;
