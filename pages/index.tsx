import {
  Box,
  Text,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';



export default function Home() {

  const inteviwees: {
    id: number;
    name: string;
    mockInteviw: {
      name: string;
      mark: number;
    }[];
    averageMockNumbe: number;
    dateWiseApplication: {
      date: string;
      number: number;
    }[];
    totalApplication: number;
    projectsMark: {
      name: string;
      mark: number;
    }[];
    averageProjectMark: number;
    TotalAverageMark: number;
  }[] = [
      {
        id: 1,
        name: "Mosharaf hossain",
        mockInteviw: [
          {
            name: "Romel Mahmud",
            mark: 66,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 66,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 67,
          },
          {
            name: "Rajib Sarker",
            mark: 65,
          }
        ],
        averageMockNumbe: 20,
        dateWiseApplication: [
          {
            date: "20.12.22",
            number: 5,
          },
          {
            date: "21.12.22",
            number: 5,
          },
          {
            date: "22.12.22",
            number: 5,
          },
          {
            date: "23.12.22",
            number: 5,
          },
          {
            date: "24.12.22",
            number: 5,
          },
          {
            date: "25.12.22",
            number: 5,
          },
          {
            date: "26.12.22",
            number: 5,
          },
          {
            date: "27.12.22",
            number: 5,
          },
          {
            date: "28.12.22",
            number: 5,
          },
          {
            date: "29.12.22",
            number: 5,
          },
          {
            date: "30.12.22",
            number: 5,
          },
          {
            date: "31.12.22",
            number: 5,
          },
        ],
        totalApplication: 20,
        projectsMark: [
          {
            name: "Romel Mahmud",
            mark: 30,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 30,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 30,
          },
          {
            name: "Rajib Sarker",
            mark: 30,
          }
        ],
        averageProjectMark: 98,
        TotalAverageMark: 89,
      },
      {
        id: 2,
        name: "Romel Mahmud",
        mockInteviw: [
          {
            name: "Mosharaf Hossain",
            mark: 66,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 68,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 68,
          },
          {
            name: "Rajib Sarker",
            mark: 67,
          }
        ],
        averageMockNumbe: 20,
        dateWiseApplication: [
          {
            date: "20.12.22",
            number: 5,
          },
          {
            date: "21.12.22",
            number: 5,
          },
          {
            date: "22.12.22",
            number: 5,
          },
          {
            date: "23.12.22",
            number: 5,
          },
          {
            date: "24.12.22",
            number: 5,
          },
          {
            date: "25.12.22",
            number: 5,
          },
          {
            date: "26.12.22",
            number: 5,
          },
          {
            date: "27.12.22",
            number: 5,
          },
          {
            date: "28.12.22",
            number: 5,
          },
          {
            date: "29.12.22",
            number: 5,
          },
          {
            date: "30.12.22",
            number: 5,
          },
          {
            date: "31.12.22",
            number: 5,
          },
        ],
        totalApplication: 20,
        projectsMark: [
          {
            name: "Romel Mahmud",
            mark: 30,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 30,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 30,
          },
          {
            name: "Rajib Sarker",
            mark: 30,
          }
        ],
        averageProjectMark: 98,
        TotalAverageMark: 89,
      },
      {
        id: 3,
        name: "Muhammed Rakibul Hasan",
        mockInteviw: [
          {
            name: "Mosharaf Hossain",
            mark: 65,
          },
          {
            name: "Romel Mahmud",
            mark: 69,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 68,
          },
          {
            name: "Rajib Sarker",
            mark: 68,
          }
        ],
        averageMockNumbe: 20,
        dateWiseApplication: [
          {
            date: "20.12.22",
            number: 5,
          },
          {
            date: "21.12.22",
            number: 5,
          },
          {
            date: "22.12.22",
            number: 5,
          },
          {
            date: "23.12.22",
            number: 5,
          },
          {
            date: "24.12.22",
            number: 5,
          },
          {
            date: "25.12.22",
            number: 5,
          },
          {
            date: "26.12.22",
            number: 5,
          },
          {
            date: "27.12.22",
            number: 5,
          },
          {
            date: "28.12.22",
            number: 5,
          },
          {
            date: "29.12.22",
            number: 5,
          },
          {
            date: "30.12.22",
            number: 5,
          },
          {
            date: "31.12.22",
            number: 5,
          },
        ],
        totalApplication: 20,
        projectsMark: [
          {
            name: "Romel Mahmud",
            mark: 30,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 30,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 30,
          },
          {
            name: "Rajib Sarker",
            mark: 30,
          }
        ],
        averageProjectMark: 98,
        TotalAverageMark: 89,
      },
      {
        id: 4,
        name: "Md Mehedi Ahsan",
        mockInteviw: [
          {
            name: "Mosharaf Hossain",
            mark: 64,
          },
          {
            name: "Romel Mahmud",
            mark: 67,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 67,
          },
          {
            name: "Rajib Sarker",
            mark: 68,
          }
        ],
        averageMockNumbe: 20,
        dateWiseApplication: [
          {
            date: "20.12.22",
            number: 5,
          },
          {
            date: "21.12.22",
            number: 5,
          },
          {
            date: "22.12.22",
            number: 5,
          },
          {
            date: "23.12.22",
            number: 5,
          },
          {
            date: "24.12.22",
            number: 5,
          },
          {
            date: "25.12.22",
            number: 5,
          },
          {
            date: "26.12.22",
            number: 5,
          },
          {
            date: "27.12.22",
            number: 5,
          },
          {
            date: "28.12.22",
            number: 5,
          },
          {
            date: "29.12.22",
            number: 5,
          },
          {
            date: "30.12.22",
            number: 5,
          },
          {
            date: "31.12.22",
            number: 5,
          },
        ],
        totalApplication: 20,
        projectsMark: [
          {
            name: "Romel Mahmud",
            mark: 30,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 80,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 80,
          },
          {
            name: "Rajib Sarker",
            mark: 90,
          }
        ],
        averageProjectMark: 98,
        TotalAverageMark: 89,
      },
      {
        id: 4,
        name: "Rajib Sarker",
        mockInteviw: [
          {
            name: "Mosharaf Hossain",
            mark: 65,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 68,
          },
          {
            name: "Romel Mahmud",
            mark: 67,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 67,
          }
        ],
        averageMockNumbe: 20,
        dateWiseApplication: [
          {
            date: "20.12.22",
            number: 2,
          },
          {
            date: "21.12.22",
            number: 1,
          },
          {
            date: "22.12.22",
            number: 1,
          },
          {
            date: "23.12.22",
            number: 9,
          },
          {
            date: "24.12.22",
            number: 3,
          },
          {
            date: "25.12.22",
            number: 4,
          },
          {
            date: "26.12.22",
            number: 1,
          },
          {
            date: "27.12.22",
            number: 4,
          },
          {
            date: "28.12.22",
            number: 5,
          },
          {
            date: "29.12.22",
            number: 1,
          },
          {
            date: "30.12.22",
            number: 5,
          },
          {
            date: "31.12.22",
            number: 0,
          },
        ],
        totalApplication: 20,
        projectsMark: [
          {
            name: "Romel Mahmud",
            mark: 30,
          },
          {
            name: "Muhammed Rakibul Hasan",
            mark: 80,
          },
          {
            name: "Md Mehedi Ahsan",
            mark: 80,
          },
          {
            name: "Rajib Sarker",
            mark: 90,
          }
        ],
        averageProjectMark: 98,
        TotalAverageMark: 89,
      },
    ];

  return (
    <div className='container'>
      {
        inteviwees.map((int, i) =>
          <Box key={i} border='2px' borderColor='gray.200' bg='cyan.800' w='100%' p={4} color='white' m={4} borderRadius="xl">
            <Text pb="2" fontSize='3xl'>Performance tabulation</Text>
            <Box display='flex' w='100%'>
              <Box flex='1'>
                <Text>
                  {int.name}
                </Text>
              </Box>
              <Box flex='1'>
                <Text pb={2}>Mock Interview numbers by -</Text>
                <UnorderedList pl={1}>
                  {
                    int.mockInteviw.map((mock, i) =>
                      <ListItem key={i}>
                        <span>{mock.name}</span> = <span>{mock.mark}</span>
                      </ListItem>
                    )
                  }
                </UnorderedList>
                <br />
                <Text>* Average Number = </Text>
              </Box>
              <Box px={4}>
                <Text pb={2}>Application Number By Date</Text>
                <UnorderedList pl={4}>
                  {
                    int.dateWiseApplication.map((dap, i) =>
                      <ListItem key={i}>
                        <span>{dap.date}</span> = <span>{dap.number}</span>
                      </ListItem>
                    )
                  }
                </UnorderedList>
                <Text>Total Number :</Text>
              </Box>
              <Box flex='1'>
                <Text pb={2}>Project Marks By -</Text>
                <UnorderedList pl={4}>
                  {int.projectsMark.map((pro, i) => <ListItem key={i}>
                    <span>{pro.name}</span> = <span>{pro.mark}</span>
                  </ListItem>)}
                </UnorderedList>
                <Text>Average Number</Text>
              </Box>
              <Box flex='1' pl="4">
                <Text>Comment</Text>
              </Box>
            </Box>
          </Box>
        )
      }
    </div >
  )
}
