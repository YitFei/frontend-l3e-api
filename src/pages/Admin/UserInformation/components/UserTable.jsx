import *  as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(id,profilePicture, email, phoneNo, name, school, classroom, accessrights, status) {
  return {
    id,
    profilePicture,
    email,
    phoneNo,
    name,
    school,
    classroom,
    accessrights,
    status,
    detail: [
      {
        relationId : id,
        parentName: 'Zeus',
        parentPhoneNo: '11091700',
        registerDate: '2077',
        birthday: '2077',
      },
   
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
	const [rows, setRows] = React.useState([
		{ accessrights :"student" },
	]);

  const handleInputChange = (e, index) => {
		//setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};


  return (
    <React.Fragment>
      <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
        <img height={34} src= {row.profilePicture}/>
         
        </TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.phoneNo}</TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.school}</TableCell>
        <TableCell align="right">{row.classroom}</TableCell>  
        <TableCell align="right"><select
							style={{ width: "100px" }}
							name="accessrights"
						  value={row.accessrights}
              onChange={(e) => handleInputChange(e, 0)}
						  >
							<option value="Teacher">Teacher</option>
							<option value="Student">Student</option>
							</select></TableCell>	

       <TableCell align="right">   
       <input type="checkbox" defaultChecked={true} />
       </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>   
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>家长名字</TableCell>
                    <TableCell>家长号码</TableCell>
                    <TableCell align="right">注册日期</TableCell>
                    <TableCell align="right">生日日期</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detail.map((detailRow) => (
                    <TableRow key={detailRow.relationId}>
                      <TableCell component="th" scope="row">{detailRow.parentName}</TableCell>
                      <TableCell>{detailRow.parentPhoneNo}</TableCell>
                      <TableCell align="right">{detailRow.registerDate}</TableCell>
                      <TableCell align="right">{detailRow.birthday}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    phoneNo: PropTypes.string.isRequired,
    detail : PropTypes.arrayOf(
      PropTypes.shape({
    
        parentName: PropTypes.string.isRequired,
        parentPhoneNo: PropTypes.string.isRequired,
      }),
    ).isRequired,
    profilePicture: PropTypes.string.isRequired,

  }).isRequired,
};

const rows = [
  createData(1,"https://i.pravatar.cc/300", "SpaceX@space.com", "0123456789","Elon Musk","Hogwarts", "S3EE6", "Teacher", "T"),
  createData(2,"https://i.pravatar.cc/300", "avadakedavra@magic.com", "0123456789","Harry Potter","Hogwarts", "S3EE6", "Student", "T"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>头像</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">电话号码&nbsp;</TableCell>
            <TableCell align="right">名字&nbsp;</TableCell>
            <TableCell align="right">学校&nbsp;</TableCell>
            <TableCell align="right">班级&nbsp;</TableCell>
            <TableCell align="right">权限&nbsp;</TableCell>
            <TableCell align="right">状态&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
