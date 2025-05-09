
import { useState, useEffect } from 'react';

type FormData = {
  transactiondate: string,
  transactiontype: string,
  description: string,
  notes: string,
  day: string,
  total_amount: number | '',
  adjustment: number | '',
  charges: number | '' | '',
  payment: number | '',
  balance: number | '',
  reference_no: string,
  id: string,
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function ContactForm(props: any) {

  const { addOrEdit, recordForEdit } = props

  const id = "id" + Math.random().toString(16).slice(2)
  
  const [formData, setFormData] = useState<FormData>({
    transactiondate: '',
    transactiontype: '',
    description: '',
    notes: '',
    day: '',
    total_amount: '',
    adjustment: '',
    charges: '',
    payment: '',
    balance: '',
    reference_no: '',
    id: id,
  });

  // console.log(formData,'formData');

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEdited, setIsEdited] = useState('Add');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.transactiontype.trim()) {
      newErrors.transactiontype = 'Transaction Type is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.transactiondate) {
      newErrors.transactiondate = 'Date is required';
    }

    if (formData.total_amount === '') {
      newErrors.total_amount = "Total Amount is required";
    }

    if (formData.adjustment === '') {
      newErrors.adjustment = "Adjustment is required";
    }

    if (formData.charges === '') {
      newErrors.charges = "Charges is required";
    }

    if (formData.payment === '') {
      newErrors.payment = "Payment is required";
    }

    if (formData.reference_no === '') {
      newErrors.reference_no = "Reference Number is required";
    }
    
    // if (!formData.notes.trim()) {
    //   newErrors.notes = 'Message is required';
    // } else if (formData.notes.trim().length < 10) {
    //   newErrors.notes = 'Message must be at least 10 characters';
    // }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

      useEffect(() => {
        // console.log(recordForEdit,'recordForEdit');
          if (recordForEdit != null)
            setIsEdited('Edit')
            setFormData({
                  ...recordForEdit
              })
      }, [recordForEdit])

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
        let NewId = '';
    if(isEdited == 'Edit'){
          NewId = formData.id
    }else{
       NewId = "id" + Math.random().toString(16).slice(2);
    }
    // console.log(formData,'formData11122')

    const finalSet =  {...formData, id: NewId}
    //  console.log(finalSet,'finalSet');
    //  return
    
    if (validateForm()) {
      setIsSubmitting(true);

      addOrEdit(finalSet, isEdited);
      
        setIsSubmitting(false);
        // setIsSubmitted(true);

        setFormData({
          transactiondate: '',
          transactiontype: '',
          description: '',
          notes: '',
          day: '',
          total_amount: '',
          adjustment: '',
          charges: '',
          payment: '',
          balance: '',
          reference_no: '',
          id: id,
        
        });
      
    }
  };
  

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg border">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Thank You!</h2>
          <p className="text-gray-600 mb-4">Payment Posted successfully.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
           Ok
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg border">
      <h2 className="text-2xl font-bold mb-4  text-[#1C1C1C]">Post Payment</h2>
      
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="transactiondate" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
                type="date"
                id="transactiondate"
                name="transactiondate"
                value={formData.transactiondate || ''}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.transactiondate ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              {/* {errors.transactiondate && <p className="mt-1 text-sm text-red-500">{errors.transactiondate}</p>} */}
          </div>
          
          <div>
            <label htmlFor="transactiontype" className="block text-sm font-medium text-gray-700 mb-1">
              Transaction Type
            </label>
            <input
              type="text"
              id="transactiontype"
              name="transactiontype"
              value={formData.transactiontype || ''}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.transactiontype ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
            {/* {errors.transactiontype && <p className="mt-1 text-sm text-red-500">{errors.transactiontype}</p>} */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
             {/* {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>} */}
          </div>
          
          <div>
            <label htmlFor="total_amount" className="block text-sm font-medium text-gray-700 mb-1">
              Total Acc.
            </label>
            <input
              type="Number"
              id="TotalAmount"
              name="total_amount"
              value={formData.total_amount || ''}
              onChange={handleChange}    
              className={`w-full px-3 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 ${
                errors.total_amount ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
             {/* {errors.total_amount && <p className="mt-1 text-sm text-red-500">{errors.total_amount}</p>} */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="adjustment" className="block text-sm font-medium text-gray-700 mb-1">
              Adjustment
            </label>
            <input
              type="Number"
              id="adjustment"
              name="adjustment"
              value={formData.adjustment || ''}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.adjustment ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
            {/* {errors.adjustment && <p className="mt-1 text-sm text-red-500">{errors.adjustment}</p>} */}
          </div>
          
          <div>
            <label htmlFor="charges" className="block text-sm font-medium text-gray-700 mb-1">
              Charges
            </label>
            <input
              type="Number"
              id="charges"
              name="charges"
              value={formData.charges || ''}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.charges ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
            {/* {errors.charges && <p className="mt-1 text-sm text-red-500">{errors.charges}</p>} */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="payment" className="block text-sm font-medium text-gray-700 mb-1">
              Payments
            </label>
            <input
              type="Number"
              id="payment"
              name="payment"
              value={formData.payment || ''}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.payment ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
            {/* {errors.payment && <p className="mt-1 text-sm text-red-500">{errors.payment}</p>} */}
          </div>
          
          <div>
            <label htmlFor="reference_no" className="block text-sm font-medium text-gray-700 mb-1">
              Reference Number
            </label>
            <input
              type="text"
              id="reference_no"
              name="reference_no"
              value={formData.reference_no || ''}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.reference_no ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
            {/* {errors.reference_no && <p className="mt-1 text-sm text-red-500">{errors.reference_no}</p>} */}
          </div>
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes 
            {/* <span className="text-red-500">*</span> */}
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes || ''}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.notes ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          />
           {/* {errors.notes && <p className="mt-1 text-sm text-red-500">{errors.notes}</p>} */}
        </div>
        

        
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-28 px-4 py-2 text-white font-medium rounded-md ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >Submit
          </button>
        </div>
      </div>
    </div>
  );
}