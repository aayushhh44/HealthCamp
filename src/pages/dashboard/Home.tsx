import {
  Grid,
  Group,
  Image,
  Paper,
  Box,
  Flex,
  Text,
  Progress,
  Button,
  Center,
  Divider,
  Input,
  Table,
  Pagination,
} from "@mantine/core";

import { PieChart, LineChart } from "@mantine/charts";
import { getMyScreenSize } from "../../utils/getMyScreen";
import { useEffect, useState } from "react";

const Home = () => {
  const screensize = getMyScreenSize()
  const [order, setOrder]= useState(12);
  useEffect(()=>{
    if(screensize==='lg'){
      setOrder(3);
    }else if(screensize==='md'){
      setOrder(6)
    }else{
      setOrder(12)
    }
  },[screensize])
  const data1 = [
    { name: "Standard", value: 400, color: "#E27613" },
    { name: "Premium", value: 300, color: "#4CAF50" },
    { name: "Premium Plus", value: 200, color: "#6092FE" },
  ];

  const linechart = [
    {
      date: "Jan",
      Apples: 110,
    },
    {
      date: "Feb",
      Apples: 60,
    },
    {
      date: "March",
      Apples: 80,
    },
    {
      date: "April",
      Apples: null,
    },
    {
      date: "May",
      Apples: null,
    },
    {
      date: "June",
      Apples: 40,
    },
    {
      date: "July",
      Apples: 120,
    },
    {
      date: "August",
      Apples: 80,
    },
  ];

  const table = [
    { sn: 1 , contact: 9843249388, email: 'digitalpravidhi@gmail.com', nameofOrg: 'Digital Pravidhi Pvt Ltd', details: 'View'},
    { sn: 2, contact: 9843249388, email: 'digitalpravidhi@gmail.com', nameofOrg: 'Digital Pravidhi Pvt Ltd', details: 'View'},
    { sn: 3, contact: 9843249388, email: 'digitalpravidhi@gmail.com', nameofOrg: 'Digital Pravidhi Pvt Ltd', details: 'View'},
    { sn: 4, contact: 9843249388, email: 'digitalpravidhi@gmail.com', nameofOrg: 'Digital Pravidhi Pvt Ltd', details: 'View'},
    { sn: 5, contact: 9843249388, email: 'digitalpravidhi@gmail.com', nameofOrg: 'Digital Pravidhi Pvt Ltd', details: 'View'},
  ];

  const rows1 = table.map((element) => (
    <Table.Tr key={element.sn}>
      <Table.Td>{element.sn}</Table.Td>
      <Table.Td>{element.nameofOrg}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.contact}</Table.Td>
      <Table.Td color="red">{element.details}</Table.Td>
    </Table.Tr>
  ));

  const data = [
    {
      title: "Event Title",
      BookedBy: "Aayush Poudel",
      content:
        "lorem ihsdajf kjhsaf khki ukashf knjk kjnsdkjj ihieh lklo reoiu oihdso oihoh uifdsaiunko oasjfo hoidsayhioufhda io....",
    },
    {
      title: "Event Title",
      BookedBy: "Aayush Poudel",
      content:
        "lorem ihsdajf kjhsaf khki ukashf knjk kjnsdkjj ihieh lklo reoiu oihdso oihoh uifdsaiunko oasjfo hoidsayhioufhda io....",
    },
  ];
  return (
    <Grid>
      <Grid.Col span={order}>
        <Paper withBorder p="lg">
          <Group justify="space-around" align="center">
            <Paper p={4} bg="#F4F4F4">
              <p>Cal</p>
            </Paper>
            <p>Upcoming Events</p>
          </Group>
          <Group mt={50} bg="#F4F4F4" justify="space-around">
            <Image
              h={60}
              w="auto"
              fit="contain"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjcyMS0wOTEteC5qcGc.jpg"
            />
            <p>07</p>
          </Group>
        </Paper>
      </Grid.Col>
      <Grid.Col span={order}>
        <Paper withBorder p="lg">
          <Group justify="space-around" align="center">
            <Paper p={4} bg="#F4F4F4">
              <p>Cal</p>
            </Paper>
            <p>Upcoming Events</p>
          </Group>
          <Group mt={50} bg="#F4F4F4" justify="space-around">
            <Image
              h={60}
              w="auto"
              fit="contain"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjcyMS0wOTEteC5qcGc.jpg"
            />
            <p>07</p>
          </Group>
        </Paper>
      </Grid.Col>
      <Grid.Col span={order}>
        <Paper withBorder p="lg">
          <Group justify="space-around" align="center">
            <Paper p={4} bg="#F4F4F4">
              <p>Cal</p>
            </Paper>
            <p>Upcoming Events</p>
          </Group>
          <Group mt={50} bg="#F4F4F4" justify="space-around">
            <Image
              h={60}
              w="auto"
              fit="contain"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjcyMS0wOTEteC5qcGc.jpg"
            />
            <p>07</p>
          </Group>
        </Paper>
      </Grid.Col>
      <Grid.Col span={order}>
        <Paper withBorder p="lg">
          <Group justify="space-around" align="center">
            <Paper p={4} bg="#F4F4F4">
              <p>Cal</p>
            </Paper>
            <p>Upcoming Events</p>
          </Group>
          <Group mt={50} bg="#F4F4F4" justify="space-around">
            <Image
              h={60}
              w="auto"
              fit="contain"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjcyMS0wOTEteC5qcGc.jpg"
            />
            <p>07</p>
          </Group>
        </Paper>
      </Grid.Col>

      <Grid columns={24}>
        <Grid.Col style={{ marginLeft: "8px" }} span={17.7}>
          <Paper withBorder>
            {data.map((da) => (
              <Box>
                <Grid mt={3} columns={24} justify="space-between">
                  <Grid.Col span={24} p="sm">
                    <Flex
                      // mt="sm"
                      justify="space-between"
                      gap="md"
                      align="center"
                    >
                      <Image
                        w="auto"
                        h={90}
                        radius={10}
                        src="https://s3-alpha-sig.figma.com/img/f704/18f6/b596222ff20ad4dfdb8c263969d7a10a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkVz44C0DW~PltHduiE4nKq6sKU9HoQH8lQ4Z4ul5YYGucQAZmG22Gixw4tZqL7GDNf7hjrSnMgvzRSIXPeUVKuddUuFP0nxe42cj2lWET-stZ6Mg8klZN1QUnw32rm6aJqiI1JCydhZ~SLQ3nudyDPNCAUQA~GreY54R-Uxvigt5J7kFywWBel-kIr~lhjG8gIKba8zOIlRTCyI~y0KKX4GwFknWyHJmUF4yV8zekmrgwo91cddIj7Kz~6nO1Y~~GKj562zlzyLzBJ4TFvDEYF~T1zUVeuneMciPbfeXgnmpEQMqR-v~WUqOFJzAjBNhcaSeMabConk73fVxbm96g__"
                      />

                      <Box>
                        <Text size="xl">Event Title</Text>
                        <Text c="green-color.0" size="md">
                          Booked By: {da.BookedBy}
                        </Text>
                        <Text c="#878787">{da.content}</Text>
                      </Box>
                    </Flex>

                    <Group justify="space-between" p={6} mt={8}>
                      <Box p={4}>
                        <Image
                          h={20}
                          fit="contain"
                          src="https://s3-alpha-sig.figma.com/img/d9ad/4614/7f380429a630c51e8e664a6f038380ee?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOAz5Dlfdq8EB5TIU07chfHOo73LF6pu62V7y5I133NcQHH1N7xSQ9xVhTvrp-Xlhh8HvaEkwC2xjbv2dXDGOSZ8azbj1J-jFPYnKEXZ1GRk69r1vFqIRoIK2TiYipY7Zd4ab8KR925d5aHM3d~KU6MUyS18l-Llb6G-7phkvSjxlTW8LwgFemq5v27amwpfYVcKT7uk8zt~iY3gvNK0ygpdr3lg7680Y-tXcRRRN05a9q50i3OYnrRjjQQukYzoB3byLrh3dL0ERz-5-JmH6VpcTr8N5YAYvcD86xIX1I1CVdRHip-s1SgfbolThRBGhDGLpLgdv4SsL8QDnJMgIg__"
                        />
                        <Text mt={10}>10th April, 2024</Text>
                      </Box>

                      <Box>
                        <Image
                          h={20}
                          fit="contain"
                          src="https://s3-alpha-sig.figma.com/img/d9ad/4614/7f380429a630c51e8e664a6f038380ee?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOAz5Dlfdq8EB5TIU07chfHOo73LF6pu62V7y5I133NcQHH1N7xSQ9xVhTvrp-Xlhh8HvaEkwC2xjbv2dXDGOSZ8azbj1J-jFPYnKEXZ1GRk69r1vFqIRoIK2TiYipY7Zd4ab8KR925d5aHM3d~KU6MUyS18l-Llb6G-7phkvSjxlTW8LwgFemq5v27amwpfYVcKT7uk8zt~iY3gvNK0ygpdr3lg7680Y-tXcRRRN05a9q50i3OYnrRjjQQukYzoB3byLrh3dL0ERz-5-JmH6VpcTr8N5YAYvcD86xIX1I1CVdRHip-s1SgfbolThRBGhDGLpLgdv4SsL8QDnJMgIg__"
                        />
                        <Text mt={10}>Preventive Health Screening Package</Text>
                      </Box>

                      <Box>
                        <Image
                          h={20}
                          fit="contain"
                          src="https://s3-alpha-sig.figma.com/img/d9ad/4614/7f380429a630c51e8e664a6f038380ee?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOAz5Dlfdq8EB5TIU07chfHOo73LF6pu62V7y5I133NcQHH1N7xSQ9xVhTvrp-Xlhh8HvaEkwC2xjbv2dXDGOSZ8azbj1J-jFPYnKEXZ1GRk69r1vFqIRoIK2TiYipY7Zd4ab8KR925d5aHM3d~KU6MUyS18l-Llb6G-7phkvSjxlTW8LwgFemq5v27amwpfYVcKT7uk8zt~iY3gvNK0ygpdr3lg7680Y-tXcRRRN05a9q50i3OYnrRjjQQukYzoB3byLrh3dL0ERz-5-JmH6VpcTr8N5YAYvcD86xIX1I1CVdRHip-s1SgfbolThRBGhDGLpLgdv4SsL8QDnJMgIg__"
                        />
                        <Text mr={10} mt={10}>
                          Patan, Lalitpur
                        </Text>
                      </Box>
                    </Group>
                    <Divider my="md" />
                  </Grid.Col>
                </Grid>
              </Box>
            ))}
            <Center m={8} mb={20}>
              <Button color="green-color.0">Load More</Button>
            </Center>
          </Paper>
        </Grid.Col>

        <Grid.Col span={6}>
          <Paper p={10} h={540} withBorder>
            <Text size="xl">
              Most Selling
              <br />
              Packages
            </Text>

            <PieChart
              mt={60}
              data={data1}
              withTooltip
              tooltipDataSource="segment"
              mx="auto"
            />

            <Flex direction="column" align="start" ml="xl" mt={90}>
              <Text>Standard</Text>
              <Group>
                <Progress w={160} value={55} color="#E27613" />
                <Text>55%</Text>
              </Group>

              <Text>Premium</Text>
              <Group>
                <Progress w={160} value={30} color="#4CAF50" />
                <Text>30%</Text>
              </Group>

              <Text>Premium Plus</Text>
              <Group>
                <Progress w={160} value={25} color="#6092FE" />
                <Text>25%</Text>
              </Group>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>

      <Grid.Col span={12} mt={20}>
        <Paper withBorder p={16}>
          <Group justify="space-between">
            <Text>Sales Overview</Text>
            <Box p={8} m={8}>
              <Button color="green-color.0" variant="transparent">
                Week
              </Button>
              <Button color="green-color.0">Month</Button>
              <Button color="green-color.0" variant="transparent">
                Year
              </Button>
            </Box>
          </Group>

          <LineChart
            h={300}
            data={linechart}
            dataKey="date"
            series={[{ name: "Apples", color: "indigo.6" }]}
            curveType="bump"
            connectNulls
          />
        </Paper>
      </Grid.Col>

      {/* Table */}

      <Grid.Col span={12}>
        <Paper p={10} withBorder>
        <Group p={6} justify="space-between">
          <Text size="xl">Registered Clients</Text>

          <Flex>
            <Input radius={20} w={300} mr={20} p={1} placeholder="Search by Name or Email" />
            <Button bg="#E8E8E8">Filter</Button>
          </Flex>
        </Group>

        <Table  horizontalSpacing="xl"
        withRowBorders={false}
        style={{ overflowX: "auto", width:"100%" }} m="lg">
      <Table.Thead bg="#F3F6F9">
        <Table.Tr>
          <Table.Th>S.N.</Table.Th>
          <Table.Th>Name of Organization</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Contact</Table.Th>
          <Table.Th>Details</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows1}</Table.Tbody>
    </Table>

    <Divider mb={20}/>

    <Group p={8} justify="space-between">
      <Text>Showing 1-5 of 22 results</Text>

      <Flex>

     <Pagination total={3}/>

      </Flex>
    </Group>

        </Paper>
      </Grid.Col>

    </Grid>
  );
};

export default Home;

 