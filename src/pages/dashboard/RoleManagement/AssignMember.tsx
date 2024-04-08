import {  Button,  Flex, Paper, Space, Switch, Text, TextInput, Title } from "@mantine/core"
import { HiPencilSquare } from "react-icons/hi2";


const AssignMember = () => {
    return (
        <Paper m={28} p={18} withBorder lh={2.5}  >
            <Flex justify={'space-between'}>
            <Flex>
                <Title order={4} style={{ color: 'blue' }}>&lt; </Title>
                <Space h={'lg'} />
                <Title order={4}>Members</Title>
                <Title order={4} style={{ color: 'blue' }}> / Assign Members</Title>               
            </Flex>
            <Flex align={'center'} gap={4}>
                <Text color='green.9'>Custom Role</Text>
                <HiPencilSquare  color="green" />

            </Flex>
            </Flex>
            
            <Space h={'lg'} />
            <Paper p={18} withBorder lh={2.5}  >
                <Flex direction='column' gap={20}  >
                    <Title order={5}>User Info</Title>

                    <TextInput placeholder="First Name" />
                    <TextInput placeholder="Last Name" />
                    <TextInput placeholder="Email" />
                    <TextInput placeholder="Phone Nummber" />
                    <TextInput placeholder="Password" />
                </Flex>
            </Paper>
            <Space h='lg' />

            <Paper p={18} withBorder lh={2.5}    >
                <Title order={5}>Select Roles</Title>
                <Flex justify='space-between' >
                    <p>Team lead</p>
                    <Switch />
                </Flex>
                <Flex justify='space-between' >
                    <p>Unit Cordinator</p>
                    <Switch />
                </Flex>
                <Flex justify='space-between' >
                    <p>Data Entry</p>
                    <Switch />
                </Flex>
                <Flex justify='space-between' >
                    <p>Finance</p>
                    <Switch />
                </Flex>
                <Flex justify='space-between' >
                    <p>Sales</p>
                    <Switch />
                </Flex>
                <Flex justify='space-between' >
                    <p>Call Center</p>
                    <Switch />
                </Flex>
                <Flex justify='space-between' >
                    <p>It Team</p>
                    <Switch />
                </Flex>
            </Paper>
            <Flex justify={'end'} gap={10} mt={10}>
                <Button variant="default" >Cancel</Button>
                <Button color="green" >Assign</Button>
            </Flex>

        </Paper>
    )
}

export default AssignMember