//https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/

//https://www.buskerscat.com/how-to-calculate-cat-years-to-human-years

function calculateDogYears() {
  var form = document.getElementById('form');

  var small_dog = {
    01: 15,
    2: 24,
    3: 28,
    4: 32,
    5: 36,
    6: 40,
    7: 44,
    8: 48,
    9: 52,
    10: 56,
    11: 60,
    12: 64,
    13: 68,
    14: 72,
    15: 76,
    16: 80,
  };
  var medium_dog = {
    01: 15,
    2: 24,
    3: 28,
    4: 32,
    5: 36,
    6: 42,
    7: 47,
    8: 51,
    9: 56,
    10: 60,
    11: 65,
    12: 69,
    13: 74,
    14: 78,
    15: 83,
    16: 87,
  };
  var large_dog = {
    01: 15,
    2: 24,
    3: 28,
    4: 32,
    5: 36,
    6: 45,
    7: 50,
    8: 55,
    9: 61,
    10: 66,
    11: 72,
    12: 77,
    13: 82,
    14: 88,
    15: 93,
    16: 99,
  };
  var giant_dog = {
    01: 12,
    2: 22,
    3: 31,
    4: 38,
    5: 45,
    6: 49,
    7: 56,
    8: 64,
    9: 71,
    10: 79,
    11: 86,
    12: 93,
    13: 100,
    14: 107,
    15: 114,
    16: 121,
  };

  var cat_age = {
    01: 15,
    2: 24,
    3: 28,
    4: 32,
    5: 36,
    6: 40,
    7: 44,
    8: 48,
    9: 52,
    10: 56,
    11: 60,
    12: 64,
    13: 68,
    14: 72,
    15: 76,
    16: 80,
    17: 84,
    17: 88,
    19: 92,
    20: 96,
    21: 100,
    22: 104,
    23: 108,
    24: 112,
    25: 116,
  };

  var name = form.name.value;
  var age = form.age.value;
  var animal = form.animal.value;
  var size = form.size.value;

  if (size === 'small') {
    if (animal === 'dog') {
      for (var key in small_dog) {
        if (small_dog.hasOwnProperty(age)) {
          age = small_dog[age];
        }
      }
    }
  }

  if (size === 'medium') {
    if (animal === 'dog') {
      for (var key in medium_dog) {
        if (medium_dog.hasOwnProperty(age)) {
          age = medium_dog[age];
        }
      }
    }
  }

  if (size === 'large') {
    if (animal === 'dog') {
      for (var key in large_dog) {
        if (large_dog.hasOwnProperty(age)) {
          age = large_dog[age];
        }
      }
    }
  }

  if (size === 'giant') {
    if (animal === 'dog') {
      for (var key in giant_dog) {
        if (giant_dog.hasOwnProperty(age)) {
          age = giant_dog[age];
        }
      }
    }
  }
  if (animal === 'cat') {
    for (var key in cat_age) {
      if (cat_age.hasOwnProperty(age)) {
        age = cat_age[age];
      }
    }
  }

  //access age and compare to dict
  // if (age == 1 && size == 'small') {
  //   age = small_dog[1];
  // }

  document.getElementById(
    'animal-years'
  ).innerText = `Hello ${name}, your animal is this old in human years: ${age}`;
  document.getElementById('total-years').classList.remove('hidden');
}
