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

export const AddDataModal = ({ initialData }: { initialData?: string | undefined }) => {
    const { addDataModalOpen, setAddDataModalOpen, addData, editData } = useContext(DataContext);

    const handleSubmit = (values: { data: string }) => {
        if (initialData) {
            editData(initialData, values.data);
        } else {
            addData(values.data);
        }

        setAddDataModalOpen(false);
    }

    return (
        <div>
            <Modal
                open={addDataModalOpen}
                onClose={() => setAddDataModalOpen(false)}
            >
                <ModalContent>
                    <Typography
                        variant="h6"
                        component="h2"
                    >
                        Add Data
                    </Typography>

                    <Formik
                        initialValues={{ data: '' }}
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
                                        Save
                                    </Button>
                                    <Button
                                        onClick={() => setAddDataModalOpen(false)}
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
