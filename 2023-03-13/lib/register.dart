import 'package:flutter/material.dart';
import 'screen3.dart';
import 'package:email_validator/email_validator.dart';

class RegisterPage extends StatefulWidget {
  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final _formKey = GlobalKey<FormState>();

  String? _fullName;
  String? _email;
  String? _password;
  String? _country;
  String? _gender;
  DateTime? _selectedDate;

  List<String> _countries = ['jordan', 'palestine', 'lebanon'];

  final _fullNameController = TextEditingController();
  final _emailAddressController = TextEditingController();
  final _passwordController = TextEditingController();

  bool _allFieldsFilled = false;

  void _checkFields() {
    setState(() {
      _allFieldsFilled = _fullName != null &&
          _email != null &&
          _password != null &&
          _country != null &&
          _gender != null &&
          _selectedDate != null;
    });
  }

  @override
  void dispose() {
    _fullNameController.dispose();
    _emailAddressController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Register Page'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextFormField(
                  controller: _fullNameController,
                  decoration: InputDecoration(
                    labelText: 'Full Name',
                    hintText: 'Enter your full name',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your full name';
                    }
                    return null;
                  },
                  onChanged: (value) {
                    _fullName = value;
                    _checkFields();
                  },
                ),
                SizedBox(height: 16.0),
                TextFormField(
                  controller: _emailAddressController,
                  decoration: InputDecoration(
                    labelText: 'Email Address',
                    hintText: 'Enter your email address',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your email address';
                    } else if (!value.contains('@') ||
                        !EmailValidator.validate(value)) {
                      return 'Please enter a valid email address';
                    }
                    return null;
                  },
                  onChanged: (value) {
                    _email = value;
                    _checkFields();
                  },
                ),
                SizedBox(height: 16.0),
                DropdownButtonFormField<String>(
                  decoration: InputDecoration(
                    labelText: 'Country',
                  ),
                  value: _country,
                  items: _countries
                      .map((country) => DropdownMenuItem<String>(
                            value: country,
                            child: Text(country),
                          ))
                      .toList(),
                  onChanged: (value) {
                    setState(() {
                      _country = value;
                    });
                    _checkFields();
                  },
                  validator: (value) {
                    if (value == null) {
                      return 'Please select a country';
                    }
                    return null;
                  },
                ),
                SizedBox(height: 16.0),
                Text('Gender'),
                Row(
                  children: [
                    Expanded(
                      child: RadioListTile<String>(
                        title: Text('Male'),
                        value: 'male',
                        groupValue: _gender,
                        onChanged: (value) {
                          setState(() {
                            _gender = value;
                            _checkFields();
                          });
                        },
                      ),
                    ),
                    Expanded(
                      child: RadioListTile<String>(
                        title: Text('Female'),
                        value: 'female',
                        groupValue: _gender,
                        onChanged: (value) {
                          setState(() {
                            _gender = value;
                            _checkFields();
                          });
                        },
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 16.0),
                Text('Date of Birth'),
                SizedBox(height: 8.0),
                InkWell(
                  onTap: () async {
                    final selectedDate = await showDatePicker(
                      context: context,
                      initialDate: DateTime.now(),
                      firstDate: DateTime(1900),
                      lastDate: DateTime.now(),
                    );
                    if (selectedDate != null) {
                      setState(() {
                        _selectedDate = selectedDate;
                      });
                      _checkFields();
                    }
                  },
                  child: InputDecorator(
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: 'Select Date',
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(_selectedDate == null
                            ? ''
                            : '${_selectedDate!.day}/${_selectedDate!.month}/${_selectedDate!.year}'),
                        Icon(Icons.arrow_drop_down),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 16.0),
                TextFormField(
                  controller: _passwordController,
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Password',
                    hintText: 'Enter your password',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter your password';
                    } else if (value.length < 6) {
                      return 'Password must be at least 6 characters long';
                    }
                    return null;
                  },
                  onChanged: (value) {
                    _password = value;
                    _checkFields();
                  },
                ),
                SizedBox(height: 32.0),
                Visibility(
                  visible: _allFieldsFilled,
                  child: ElevatedButton(
                    child: Text('Submit'),
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        _formKey.currentState!.save();
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => linkedInWidget(),
                          ),
                        );
                      }
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
