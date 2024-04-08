import { Box, Table } from "@mantine/core";

const elements = [
    { sn: 1, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { sn: 2, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { sn: 3, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { sn: 4, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { sn: 5, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];
  
const RoleManagement = () => {
    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
          <Table.Td>{element.sn}</Table.Td>
          <Table.Td>{element.name}</Table.Td>
          <Table.Td>{element.symbol}</Table.Td>
          <Table.Td>{element.mass}</Table.Td>
        </Table.Tr>
      ));

   
  return (
    <Box>
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>S.N.</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
    </Box>
  )
}

export default RoleManagement
