import { Button, Flex, Image, Paper, TextInput, Title } from '@mantine/core'

const TeamLead = () => {
    return (
        <>
            <Title c='blue.5'>Role Management</Title>

            <Paper>
                {/* <Flex>
                    <Title> Team(3)</Title>
                    
                        <TextInput
                            bg={'smokewhite'}
                            placeholder='search by Name or Email'
                        />
                        <Button bg={'smokewhite'} variant='default'>Filter</Button>
                   
                </Flex> */}
                <Flex>
                <Flex>
                    <Image
                        h={100}
                        w={100}
                        radius="md"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    />
                </Flex>
                <Flex>
                    <Image
                        h={100}
                        w={100}
                        radius="md"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    />
                </Flex>

                <Flex>
                    <Image
                        h={100}
                        w={100}
                        radius="md"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    />
                </Flex>
                </Flex>


            </Paper>
        </>
    )
}

export default TeamLead