import * as React from 'react';
import userImg from '../..//src/asset/images/user.png'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../src/asset/css/dash.css'
import '../../src/asset/css/Profiles.css'
import Home from '../pages/Home'
import { tabsClasses, useMediaQuery } from '@mui/material';



function TabPanelMobile(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanelMobile.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yPropsMobile(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChangeMobile = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} variant="scrollable" allowScrollButtonsMobile onChange={handleChangeMobile} aria-label="visible arrows tabs example">
                    <Tab label="Item One" {...a11yPropsMobile(0)} />
                    <Tab label="Item Two" {...a11yPropsMobile(1)} />
                    <Tab label="Item Three" {...a11yPropsMobile(2)} />
                    <Tab label="Item Four" {...a11yPropsMobile(3)} />
                    <Tab label="Item Five" {...a11yPropsMobile(4)} />
                </Tabs>
            </Box>
            <TabPanelMobile value={value} index={0}>
                <div className="profile myProf myDash">
                    <div className="profile-img">
                        <img src={userImg} alt="" />
                    </div>
                    <div className="profile-content">
                        <h1>Welcome To Your Dashboard</h1>
                        <h4>Luis Andorra</h4>
                        <p>[luis@gmail.com]</p>
                        <i className="fa-solid fa-phone phone"></i>
                        <p><i className="fa-solid fa-earth earth"></i> Pakistan</p>
                    </div>
                </div>
            </TabPanelMobile>
            <TabPanelMobile value={value} index={1}>
                <div className="profile myProf">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="td">1</th>
                                <td className="td">Mark</td>
                                <td className="td">Otto</td>
                                <td className="td">mdo</td>
                                <td className="td">mdo</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">2</th>
                                <td className="td">Jacob</td>
                                <td className="td">Thornton</td>
                                <td className="td">fat</td>
                                <td className="td">fat</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">3</th>
                                <td className="td">Larry the Bird</td>
                                <td className="td">twitter</td>
                                <td className="td">twitter</td>
                                <td className="td">fat</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">4</th>
                                <td className="td">Larry the Bird</td>
                                <td className="td">twitter</td>
                                <td className="td">twitter</td>
                                <td className="td">fat</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">5</th>
                                <td className="td">Larry the Bird</td>
                                <td className="td">twitter</td>
                                <td className="td">twitter</td>
                                <td className="td">fat</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">6</th>
                                <td className="td">Larry the Bird</td>
                                <td className="td">twitter</td>
                                <td className="td">twitter</td>
                                <td className="td">fat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TabPanelMobile>
            <TabPanelMobile value={value} index={2}>
                <div className="profile myProf">
                    <div className="update-profile">
                        <div className="name1 update-">
                            <div className="first edit-">
                                <h2 for="firstname">First Name:</h2>
                                <input type="text" name="name" className="firstname" placeholder="Enter Your First Name" />
                            </div>

                            <div className="email edit-">
                                <h2 for="email">Email:</h2>
                                <input type="email" name="email" className="firstname" placeholder="Enter Your Email Address" />
                            </div>
                        </div>
                        <div className="name2 update-">
                            <div className="last edit-">
                                <h2 for="firstname">Last Name:</h2>
                                <input type="text" name="name" className="lastname" placeholder="Enter Your Last Name" />
                            </div>
                            <div className="password edit-">
                                <h2 for="firstname">Password:</h2>
                                <input type="password" name="password" className="lastname" placeholder="Enter Your Password" />
                                <p>If You Want To Change Password Then Type Here</p>
                            </div>
                        </div>
                    </div>
                    <div className="update-profile">
                        <div className="name1 update-">
                            <div className="first edit-">
                                <h2 for="firstname">Gender:</h2>
                                <input type="radio" name="gender" className="firstname" value="Male" />
                                <label for="html">Male</label>
                                <input type="radio" name="gender" className="firstname" value="Fe-Male" />
                                <label for="html">Fe-Male</label>
                            </div>

                            <div className="email edit-">
                                <h2 for="firstname">Phone Number:</h2>
                                <input type="text" name="name" className="firstname" placeholder="Enter Your Email Address" />
                            </div>
                        </div>
                        <div className="name2 update-">
                            <div className="last edit-">
                                <h2 for="firstname">Profile Photo:</h2>
                                <input type="text" name="name" className="lastname" placeholder="Enter Your Last Name" />
                            </div>
                            <div className="password edit-">
                                <h2 for="firstname">Address:</h2>
                                <input type="text" name="name" className="lastname" placeholder="Enter Your Password" />
                            </div>
                        </div>
                    </div>

                </div>
            </TabPanelMobile>
            <TabPanelMobile value={value} index={3}>
                <div className="profile myProf">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">AMOUNT</th>
                                <th scope="col">DISCRIPTION</th>
                                <th scope="col">CLIENT</th>
                                <th scope="col">DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="td">1</th>
                                <td className="td">$99.9</td>
                                <td className="td">CH-912840f224</td>
                                <td className="td">Jhon</td>
                                <td className="td">Mar 11 1:53 PM  ---</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">2</th>
                                <td className="td">$41.3</td>
                                <td className="td">CH-912840f224</td>
                                <td className="td">Can watson</td>
                                <td className="td">Mar 11 1:53 PM  ---</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">3</th>
                                <td className="td">$99.9</td>
                                <td className="td">CH-912840f224</td>
                                <td className="td">Monsi</td>
                                <td className="td">Mar 11 1:53 PM  ---</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">4</th>
                                <td className="td">$39.0</td>
                                <td className="td">CH-912840f224</td>
                                <td className="td">Ryan Watt</td>
                                <td className="td">Mar 11 1:53 PM  ---</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">5</th>
                                <td className="td">$52.9</td>
                                <td className="td">CH-912840f224</td>
                                <td className="td">Jhon</td>
                                <td className="td">Mar 11 1:53 PM  ---</td>
                            </tr>
                            <tr>
                                <th scope="row" className="td">6</th>
                                <td className="td">$59.9</td>
                                <td className="td">CH-912840f224</td>
                                <td className="td">Mavia</td>
                                <td className="td">Mar 11 1:53 PM  ---</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TabPanelMobile>
            <TabPanelMobile value={value} index={4}>
                Item Five
            </TabPanelMobile>
        </Box>
    );
}