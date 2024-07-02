import React, { useState, ChangeEvent } from 'react';
import { Input, Text,Box } from '@chakra-ui/react';

const FormElement = ({title,des,widths}:{title:string, des:string, widths?:string}) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <>
            <Box textAlign={'left'} w={{lg:'85%'}}>
                <Text mb='8px' fontSize={'xl'} color={'#fff'}>{title}</Text>
                <Input
                    value={value}
                    onChange={handleChange}
                    placeholder={des}
                    h={ widths ? widths: '50px' }
                    borderRadius={'0px'}
                    bg={'rgb(250, 250, 250, .50)'}
                    _hover={{bg:'#fff'}}
                />
            </Box>
        </>
    );
};

export default FormElement