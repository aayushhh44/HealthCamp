import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  Text,
} from "@mantine/core";

const ClientDetails = () => {
  return (
    <Box>
      <Group justify="space-between">
        <Text>KYC Approval</Text>

        <Button>Accept/Reject</Button>
      </Group>

      <Paper withBorder p={20} mt={20}>
        <Text>Client Details</Text>

        <Grid mt={20}>
          <Grid.Col span={3.5}>
            <Paper h={190} withBorder>
              <Image
                h={140}
                fit="contain"
                src="https://s3-alpha-sig.figma.com/img/9090/c7df/4ba58cb97b962769e1ea9bd4832e1436?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nN8KSoob86sRsXg5HNMpFZAlPEpwZyRL2~hbyWWfggVnLrbnVCUZ3sAwuiqGyaI86fi4PrkCvsI2Y-tvJhYoTnkU8zan9zSUMYKEoGU-1sLR6e5imKumyMDIDBUaqxrosvYVdFD3fu2-dqjRM7XKjE9LupOQ6CS9zS8sbs2zGzRZV-0E5dqQveSxauj9eQmbfTaxWyvCoMwxYRRubK37EyBDlPtCTxgAMS-B7Smlc1K4xJ8ZI4fcWcXwgnI3ka21UodfoMYwqsjZqqKpfaibosciDri9ZY3d24hEyuMFzrgriNhDoO5Wu54AltaLNoGe19y~Rq2yu6kf0SAC7Jy0iQ__"
              />
              <Center>Digital Pravidhi Pvt. Ltd DIGITAL</Center>
            </Paper>
          </Grid.Col>

          <Grid.Col span={8}>
            <Paper withBorder>
              <Flex justify="space-around">
                <Flex p="md" direction="column" justify="center">
                  <Text size="xl">Contact Information</Text>

                  <Text my={6}>Email</Text>
                  <Text c="dimmed">digitalpravidhi@gmail.com</Text>

                  <Text my={6}>Contact</Text>
                  <Text c="dimmed">9813790435</Text>
                </Flex>

                <Divider orientation="vertical" my={16} />

                <Box>
                    <Text size="xl">Address Information</Text>

                    <Flex direction="column" flex="start">
                      <Box>
                        <Text>Province/State</Text>
                        <Text>Bagmati</Text>
                      </Box>

                      <Box>
                        <Text>Street Address</Text>
                        <Text>Patan, Krishan Galli</Text>
                      </Box>
                    </Flex>

                    <Group>
                      <Box>
                        <Text>City</Text>
                        <Text>Lalitpur</Text>
                      </Box>

                      <Box>
                        <Text>Postal/Zip Code</Text>
                        <Text>121212</Text>
                      </Box>
                    </Group>
                 
                </Box>
              </Flex>
            </Paper>
          </Grid.Col>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ClientDetails;
