import { useContext, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { DataContext } from '../../context/DataContext';
import { ModalContent, ModalFooter } from './style';

const validationSchema = Yup.object().shape({
    data: Yup.string().required('Data is required'),
});

export const EditDataModal = () => {
    const { editDataModalOpen, setEditDataModalOpen, editData, dataToEdit } = useContext(DataContext);

    const handleSubmit = (values: { data: string }) => {
        if (!dataToEdit) {
            return;
        }

        editData(dataToEdit._id, values.data);
        setEditDataModalOpen(false);
    }

    return (
        <div>
            <Modal
                open={editDataModalOpen}
                onClose={() => setEditDataModalOpen(false)}
            >
                <ModalContent>
                    <Typography
                        variant="h6"
                        component="h2"
                    >
                        Edit Data
                    </Typography>

                    <Formik
                        initialValues={{ data: dataToEdit?.data || '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ errors, touched, isValid }) => (
                            <Form>
                                <Box mb={2}>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        name="data"
                                        label="Data"
                                        error={!!(touched.data && errors.data)}
                                        helperText={errors.data ? errors.data : ''}
                                    />
                                </Box>
                                <ModalFooter>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={!isValid}
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        onClick={() => setEditDataModalOpen(false)}
                                        variant="outlined"
                                    >
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </Form>
                        )}
                    </Formik>
                </ModalContent>
            </Modal>
        </div>
    );
}


