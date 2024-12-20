function generateSentence() {
  // Get selected offer, location, and question 2 answer
  const selectedOffer = document.querySelector('input[name="offers"]:checked');
  const location = document.getElementById('location').value;
  const fhaAnswer = document.querySelector('input[name="fha"]:checked')?.value; // Question 2

  if (!selectedOffer || !location || !fhaAnswer) {
    alert("Please select an offer, location, and answer question 2.");
    return;
  }

  let resultText = "";

  // Define the texts for each offer based on FHA question 2 (yes)
  const offerTexts = {
    "1": `For eligibility of the above finance Promotion, Qualified Buyer of an Eligible Home must (1) pre-apply with Affiliated Lender by visiting www.taylormorrison.com/home-financing prior to submitting offer to qualify for the finance Promotion; (2) utilize the services of Closing Agent selected only by Seller and finance with Affiliated Lender; and (3) satisfy all other closing date and eligibility criteria (each, an “Eligible Home”). Seller reserves the right to modify the above finance Promotion’s terms and/or Promotion Period at any time prior to contract. Buyer is not required to finance through Affiliated Lender and/or to use such Closing Agent selected by Seller to purchase a home; however, Buyer must use both the Closing Agent selected by Seller and finance through Affiliated Lender to receive the finance Promotion. Interest rates and available loan products are subject to underwriting, loan qualification, and program guidelines. Maximum seller contributions apply. Not to be combined with any other incentive offer, except as otherwise expressly set forth above or in an Incentive Addendum to the Purchase Agreement. Other restrictions may apply.`,
    "2": `For eligibility of the above finance Promotions, Qualified Buyer of an Eligible Home must (1) pre-apply with Affiliated Lender by visiting www.taylormorrison.com/home-financing prior to submitting offer to qualify for the applicable Promotion; (2) utilize the services of Closing Agent selected only by Seller and finance with Affiliated Lender; and (3) satisfy all other closing date and eligibility criteria. Seller reserves the right to modify the finance Promotions, Promotion’s terms and/or Promotion Period at any time prior to contract. Buyer is not required to finance through Affiliated Lender and/or to use such Closing Agent selected by Seller to purchase a home; however, Buyer must use both the Closing Agent selected by Seller and finance through Affiliated Lender to receive the finance Promotions. Interest rates and available loan products are subject to underwriting, loan qualification, and program guidelines. Maximum seller contributions apply. Not to be combined with any other incentive offer, except if otherwise expressly set forth above or in an Incentive Addendum to the Purchase Agreement. Other restrictions may apply.  `,
    "3": `For eligibility of any of the above finance Promotions, Qualified Buyer of an Eligible Home must (1) pre-apply with Affiliated Lender by visiting www.taylormorrison.com/home-financing prior to submitting offer to qualify for any of the above finance Promotions; (2) utilize the services of Closing Agent selected only by Seller and finance with Affiliated Lender; and (3) satisfy all other closing date and eligibility criteria. Seller reserves the right to modify any of the above finance Promotion terms and/or Promotion Periods at any time prior to contract. Buyer is not required to finance through Affiliated Lender and/or to use such Closing Agent selected by Seller to purchase a home; however, Buyer must use both the Closing Agent selected by Seller and finance through Affiliated Lender to receive any of the above finance Promotions. Interest rates and available loan products are subject to underwriting, loan qualification, and program guidelines. Maximum seller contributions apply. Not to be combined with any other incentive offer, except as otherwise expressly set forth above or in an Incentive Addendum to the Purchase Agreement. Actual savings will vary by the community, floor plan, lot premium, options of home and availability. Other restrictions may apply.`
  };

  // Append FHA sentence if answer is yes
  if (fhaAnswer === "yes") {
    resultText = offerTexts[selectedOffer.value] + ` Taylor Morrison Home Funding, Inc. is not acting on behalf of or at the direction of HUD/FHA or the federal government. Not all Borrowers will qualify. Services not available in all states.`;
  } else {
    resultText = offerTexts[selectedOffer.value]  + ` Not all Borrowers will qualify. Services not available in all states.`;
  }



  // Append the 'corp' location text if applicable
  if (location === "corp") {
    resultText += ` Taylor Morrison Home Funding, Inc. (“Affiliated Lender”), NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: AZ: #0917436 | CA: DFPI #4130023 | CO: Registration #8588, PH# (866) 379-5390 | FL: MLD1920 | GA: #52654 | NV: #3938 (branch located at 1820 Festival Plaza Dr., Ste. 220A, Las Vegas, NV 89135 PH# (702) 680-1085)| NC: #L-191654 | OR: #ML-4272 | SC: #MLS-8588 | TX: #8588 | WA: #CL-8588 | www.nmlsconsumeraccess.org.`;
  }
else if(location === "bay") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: CA: DFPI #4130023 | www.nmlsconsumeraccess.org.`;
  }

else if (location === "s-california") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: CA: DFPI #4130023 | www.nmlsconsumeraccess.org.`;
  }
else if (location === "sacramento") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: CA: DFPI #4130023 | www.nmlsconsumeraccess.org.`;
} else if (location === "portland") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed locations: OR: #ML-4272 | WA: #CL-8588 | www.nmlsconsumeraccess.org.`;
} else if (location === "seattle") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed locations: WA: #CL-8588 | www.nmlsconsumeraccess.org.`;
} else if (location === "austin") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: TX: #8588 | www.nmlsconsumeraccess.org.`;
} else if (location === "dallas") {
    resultText += ` Taylor Morrison Home Funding, Inc. NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751. Licensed location: TX: #8588 | www.nmlsconsumeraccess.org.`;
} else if (location === "houston") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: TX: #8588 | www.nmlsconsumeraccess.org.`;
} else if (location === "jacksonville") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed locations: FL: MLD1920 | GA: #52654 | www.nmlsconsumeraccess.org.`;
} else if (location === "naples") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location FL: MLD1920 | www.nmlsconsumeraccess.org.`;
} else if (location === "orlando") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location FL: MLD1920 | www.nmlsconsumeraccess.org.`;
} else if (location === "sarasota") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location FL: MLD1920 | www.nmlsconsumeraccess.org.`;
} else if (location === "tampa") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location FL: MLD1920 | www.nmlsconsumeraccess.org.`;
} else if (location === "treasure") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location FL: MLD1920 | www.nmlsconsumeraccess.org.`;
} else if (location === "denver") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed locations: FL: MLD1920 | GA: #52654 | www.nmlsconsumeraccess.org.`;
} else if (location === "lasvegas") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: NV: #3938 (branch located at 1820 Festival Plaza Dr, Ste. 220A, Las Vegas, NV 89135 PH# 702-680-1085) (“Affiliated Lender”). | www.nmlsconsumeraccess.org.`;
} else if (location === "phoenix") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: AZ: #0917436 | www.nmlsconsumeraccess.org.`;
} else if (location === "atlanta") {
    resultText += ` Taylor Morrison Home Funding, Inc. NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751. Licensed location: GA: #52654 | www.nmlsconsumeraccess.org.`;
} else if (location === "charlotte") {
    resultText += ` Taylor Morrison Home Funding, Inc. NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751. Licensed locations: NC: #L-191654 | SC: #MLS-8588 | www.nmlsconsumeraccess.org.`;
} else if (location === "charlotte_south") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed locations: CO: Registration #8588, PH# 866-379-5390 | www.nmlsconsumeraccess.org.`;
} else if (location === "raleigh") {
    resultText += ` Taylor Morrison Home Funding, Inc. NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751. Licensed location: NC: #L-191654 | www.nmlsconsumeraccess.org.`;
} else if(location === "indy") {
    resultText += ` Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: IN: #DFI-66890, PH# 866 - 379 - 5390 | www.nmlsconsumeraccess.org.`;
}


  // Display the generated result
  document.getElementById('result').textContent = resultText;
}
function copyToClipboard() {
  // Get the text from the result textarea
  const resultText = document.getElementById("result").value;
  
  // Create a temporary textarea element to hold the text
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = resultText;
  
  // Make the textarea readonly to prevent user interaction
  tempTextArea.setAttribute("readonly", "");
  
  // Hide the textarea from view
  tempTextArea.style.position = "absolute";
  tempTextArea.style.left = "-9999px";
  
  // Append the textarea to the body
  document.body.appendChild(tempTextArea);
  
  // Select the text inside the textarea
  tempTextArea.select();
  
  // Execute the copy command
  document.execCommand("copy");
  
  // Remove the temporary textarea element
  document.body.removeChild(tempTextArea);
  
  // Alert the user that the text has been copied
  alert("Text copied to clipboard!");
}
