import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

const useStyles = makeStyles(({ palette }) => ({
  buttonStyles: {
    fontSize: 12,
    color: palette.grey[500],
    backgroundColor: "#add8e6",
    fontWeight: 500,
    margin: 0
  },
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center"
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto"
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em"
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    margin: 0
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px"
  }
}));

export const Profileboard = React.memo(function ProfileCard(props) {
  const styles = useStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%"
  });
  return (
    <Card className={cx(styles.card)}>
      <CardContent>
        <Avatar className={styles.avatar} src={props.image} />
        <h3 className={styles.heading}>{props.name}</h3>
        <span className={styles.subheader}>{props.desciption}</span>
        <br />
        <Button className={styles.buttonStyles}>Edit</Button>
      </CardContent>
      <Divider light />
      <Box display={"flex"}>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Email</p>
          <p className={styles.statValue}>{props.email}</p>
        </Box>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Like</p>
          <p className={styles.statValue}>12</p>
        </Box>
      </Box>
    </Card>
  );
});

export default Profileboard;
