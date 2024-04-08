import { Box, Button, Group, Paper, Table, useMantineTheme } from "@mantine/core";
import { Avatar, Tooltip } from "@mantine/core";
import theme from "../../../theme";

const elements = [
    {
        sn: 1,
        Roles: "Team Lead",
        user: [
            {
            id: 1,
            name: "Aayush",
            img: "..."
        },
        
        {
            id: 2,
            name: "Rahul",
            img: "..."
        }, {
            id: 3,
            name: "Sita",
            img: "https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg"
        }
        ]
    },{
        sn: 2,
        Roles: "Unit Coordinator",
        user: [
            {
            id: 1,
            name: "Aayush",
            img: "..."
        },
        
        {
            id: 2,
            name: "Rahul",
            img: "..."
        }, {
            id: 3,
            name: "Sita",
            img: "https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg"
        }
        ]
    },{
        sn: 3,
        Roles: "Data Entry",
        user: [
            {
            id: 1,
            name: "Aayush",
            img: "..."
        },
        
        {
            id: 2,
            name: "Rahul",
            img: "..."
        }, {
            id: 3,
            name: "Sita",
            img: "https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg"
        }
        ]
    },{
        sn: 4,
        Roles: "Finance",
        user: [
            {
            id: 1,
            name: "Aayush",
            img: "..."
        },
        
        {
            id: 2,
            name: "Rahul",
            img: "..."
        }, {
            id: 3,
            name: "Sita",
            img: "https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg"
        }
        ]
    },{
        sn: 5,
        Roles: "Sales",
        user: [
            {
            id: 1,
            name: "Aayush",
            img: "..."
        },
        
        {
            id: 2,
            name: "Rahul",
            img: "..."
        }, {
            id: 3,
            name: "Sita",
            img: "https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg"
        }
        ]
    }
    ,{
        sn: 6,
        Roles: "Call Center",
        user: [
            {
            id: 1,
            name: "Aayush",
            img: "..."
        },
        
        {
            id: 2,
            name: "Rahul",
            img: "..."
        }, {
            id: 3,
            name: "Sita",
            img: "https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg"
        }
        ]
    }
    ,{
        sn: 7,
        Roles: "IT Team",
        user: [
            {
            id: 1,
            name: "Aayush",
            img: "..."
        },
        
        {
            id: 2,
            name: "Rahul",
            img: "..."
        }, {
            id: 3,
            name: "Sita",
            img: "https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg"
        }
        ]
    }
    ,{
        sn: 8,
        Roles: "Custom",
        user: [
            {
            id: 1,
            name: "Aayush",
            img: "..."
        },
        
        {
            id: 2,
            name: "Rahul",
            img: "..."
        }, {
            id: 3,
            name: "Sita",
            img: "https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg"
        }
        ]
    }
];

const RoleManagement = () => {

    const rows = elements.map((element) => (
        <Table.Tr key={element.sn}>
            <Table.Td>{element.sn}</Table.Td>
            <Table.Td>{`${element.Roles}(${element.user.length})`}</Table.Td>
            <Table.Td>
                <Tooltip.Group openDelay={300} closeDelay={100}>
                    <Avatar.Group spacing="sm">
                        {element.user.map((item) => {
                            return (
                                <Tooltip label={item.name} withArrow>
                                    <Avatar src={item.img} radius="xl" />
                                </Tooltip>
                            )
                        })}
                    </Avatar.Group>
                </Tooltip.Group>
            </Table.Td>
            <Table.Td><Button variant="transparent"><u>View More</u></Button></Table.Td>
        </Table.Tr>
    ));


    return (

        <Paper withBorder p="xl">
        {/* <Box my="xl" p="lg"> */}
            <Group justify="space-between">
                <h3>Members</h3>
                <Group>
                    <Button variant="outline" color="green-color.0">Asigned Member</Button>
                    <Button color="green-color.0">Asigned Role</Button>
                </Group>
            </Group>
            <Table horizontalSpacing="xl" withRowBorders={false}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>S.N.</Table.Th>
                        <Table.Th>Roles</Table.Th>
                        <Table.Th>Users</Table.Th>
                        <Table.Th>Action</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        {/* </Box> */}
        </Paper>
    )
}

export default RoleManagement
