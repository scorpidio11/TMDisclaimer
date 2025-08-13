function generateSentence() {


  var trustedOption = document.querySelector('input[name="trusted"]:checked').value;
  var calAD = document.querySelector('input[name="calad"]:checked').value;
  var disclaimerOption = document.querySelector('input[name="disclaimer"]:checked').value;
  var StockPhotosOption = document.querySelector('input[name="photos"]:checked').value;
  var prdocutPhotosOption = document.querySelector('input[name="product-photos"]:checked').value;
  var renderingOption = document.querySelector('input[name="rendering"]:checked').value;
  var floorPlan = document.querySelector('input[name="fplan"]:checked').value;
  var virtualTour = document.querySelector('input[name="virtual"]:checked').value;
  var neighborMap = document.querySelector('input[name="neighborhoodmap"]:checked').value;
  var qmipricingInfo = document.querySelector('input[name="pricing"]:checked').value;
  var tbbpricingInfo = document.querySelector('input[name="tbbpricing"]:checked').value;
  var quickMovein = document.querySelector('input[name="qmi"]:checked').value;
  var siteMap = document.querySelector('input[name="sitemap"]:checked').value;
  var locationLocation = document.querySelector('input[name="locationlocation"]:checked').value;
  var esVideo = document.querySelector('input[name="esvideos"]:checked').value;
//  var fiftyfiveCommunity = document.querySelector('input[name="senior"]:checked').value;
  var tmhfOption = document.querySelector('input[name="tmhf"]:checked').value;
  var tmAmenity = document.querySelector('input[name="amenity"]:checked').value;
  var tmFinal = document.querySelector('input[name="final"]:checked').value;
  var location = document.getElementById("location").value;

  // Calculate the current date
  var currentDate = new Date();
  var currentMonth = currentDate.toLocaleString('default', {
    month: 'long'
  });
  var currentYear = currentDate.getFullYear();
  var copyrightYear = "\u00A9 " + currentMonth + " " + currentYear + ", ";

  var sentence = "";


  // Hide the questions if "No" is selected
  if (trustedOption === "no") {
    document.getElementById('question1').style.display = 'none';
  }
  if (StockPhotosOption === "no") {
    document.getElementById('question2').style.display = 'none';
  }

  if (prdocutPhotosOption === "no") {
    document.getElementById('question3').style.display = 'none';
  }

  if (renderingOption === "no") {
    document.getElementById('question4').style.display = 'none';
  }

  if (floorPlan === "no") {
    document.getElementById('question5').style.display = 'none';
  }

  if (virtualTour === "no") {
    document.getElementById('question6').style.display = 'none';
  }

 if (neighborMap === "no") {
    document.getElementById('question14').style.display = 'none';
  }
	
  if (qmipricingInfo === "no") {
    document.getElementById('question7').style.display = 'none';
  }

  if (tbbpricingInfo=== "no") {
    document.getElementById('question13').style.display = 'none';
  }
	
  if (quickMovein === "no") {
    document.getElementById('question8').style.display = 'none';
  }

 if (siteMap === "no") {
    document.getElementById('question9').style.display = 'none';
  }
	
	if (locationLocation === "no") {
    document.getElementById('question10').style.display = 'none';
  }
	
  if (tmAmenity === "no") {
    document.getElementById('question11').style.display = 'none';
  }
	
 if (tmFinal === "no") {
    document.getElementById('question12').style.display = 'none';
  }
	
	
//  if (fiftyfiveCommunity === "no") {
//    document.getElementById('question15').style.display = 'none';
//  }


if (tmhfOption === "no") {
    document.getElementById('question16').style.display = 'none';
  }
	
if (calAD === "no") {
    document.getElementById('question17').style.display = 'none';
  }
	
if (esVideo === "no") {
    document.getElementById('question18').style.display = 'none';
  }
	
	
//	disclaimer content - All Answers
	
   if (  location === "mountainfall"&& calAD === "yes" || location === "cantamia"&& calAD === "yes" || location === "meridian" && calAD === "yes") {

    sentence += "WARNING: THE CALIFORNIA DEPARTMENT OF REAL ESTATE HAS NOT INSPECTED, EXAMINED, OR QUALIFIED THIS OFFERING.";
  }
	


  if (trustedOption === "yes") {
    sentence += "\n\n"; 
    sentence += "†Taylor Morrison received the highest numerical score in the proprietary Lifestory Research 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024 and 2025 America\u2019s Most Trusted\u00AE Home Builder study. Study results are based on experiences and perceptions of people surveyed. Your experiences may vary. Visit www.lifestoryresearch.com.";
  }

if (disclaimerOption === "yes" && location === "solivita" ) {
    sentence += "\n\n";
    sentence += "*At least one resident of household must be 55 or older, and no persons who have yet to attain eighteen (18) years of age shall be permitted to reside in any Home within Solivita except children under eighteen (18) years of age may be permitted to visit and temporarily reside in a home for no more than 30 days in any one calendar year. Only an Owner and Immediate Family Members who are eighteen (18) years of age or older may permanently reside in in a residence. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.   For our NJ prospective buyers: This advertisement is a solicitation for the sale of homes in Solivita: N.J. Reg. No. 07-04-0014. For our NY prospective buyers: THE COMPLETE OFFERING TERMS ARE IN AN OFFERING PLAN AVAILABLE FROM THE SPONSOR. FILE NO. H000008. ";
  }
	
	
	if (disclaimerOption === "yes" && location === "tradition" ) {
    sentence += "\n\n";
    sentence += "*At least one resident of household must be 55 or older, and no person under the age of nineteen (19) years of age shall reside in any Home for more than 30 days in any one calendar year. Only an owner and his or her Immediate Family Members who are nineteen (19) years of age or older may permanently reside in a residence. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	
		if (disclaimerOption === "yes" && location === "wiregrass" ) {
    sentence += "\n\n";
    sentence += "*At least one resident of household must be 55 or older, and no person twenty-two (22) years of age or under shall reside in any Home for more than 90 days in any 12-month period. Persons 22 years of age or older may reside in Esplanade at Wiregrass Ranch as long as there is an age qualified person also residing in the Home. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	
			if (disclaimerOption === "yes" && location === "bonterra" ) {
    sentence += "\n\n";
    sentence += "*At least one resident of household must be 55 or older, and additional restrictions apply. Some residents may be younger than 55 and no one under 19 in permanent residency. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	

	

	
				if (disclaimerOption === "yes" && location === "vizcaya" ) {
    sentence += "\n\n";
    sentence += "*At least one resident of household must be 55 or older, and additional restrictions apply. Some residents may be younger than 55 and no one 19 and under in permanent residency. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	
				if (disclaimerOption === "yes" && location === "cantamia" ) {
    sentence += "\n\n";
    sentence += "*CantaMia at Estrella is an age-qualified community intended for permanent occupancy of each residence by at least one person 55 years of age or older in compliance with all applicable state and federal laws, as well as the Community's Declaration. Some residents may be younger under very limited circumstances and no one under 19 years of age in permanent residency. Complete details available. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
				if (disclaimerOption === "yes" && location === "meridian" ) {
    sentence += "\n\n";
    sentence += "*Ovation at Meridian is an age-qualified community intended for permanent occupancy of each residence by at least one person 55 years of age or older in compliance with all applicable state and federal laws, as well as the Community's Declaration. Some residents may be younger under very limited circumstances and no one under 18 years of age in permanent residency. Complete details available. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	
	
					
	
	if (disclaimerOption === "yes" && location === "mountainfall" ) {
    sentence += "\n\n";
    sentence += "*Ovation at Mountain Falls is an age-qualified community intended for permanent occupancy of each residence by at least one person 55 years of age or older in compliance with all applicable state and federal laws, as well as the Community's Declaration. Some residents may be younger under very limited circumstances and no one under 19 years of age in permanent residency. Complete details available. **The Community is adjacent to/in the vicinity of the public golf course commonly known as Mountain Falls (“Golf Course”), which has the sole and absolute right to control all aspects of the ownership, maintenance and operation of the golf course and related facilities which comprise the Golf Course, including, without limitation, the construction, improvement, operation, use, maintenance, repair, alteration, refurbishment, reconstruction, and/or other transfer of the Golf Course. The purchase of a home in the Community confers no interest whatsoever in and to the Golf Course, or any rights or privileges to use the Golf Course.  All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	
	
	

	
	
		if (disclaimerOption === "yes" && location === "summerbend" ) {
    sentence += "\n\n";
    sentence += "*At least one resident of household must be 55 or older, and additional restrictions apply. Some residents may be younger than 55 in limited circumstances. For minimum age requirements for permanent residents in Esplanade Summer's Bend, please see a Taylor Morrison Community Sales Manager for complete details. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	

	
			if (disclaimerOption === "yes" && location === "turkeycreek" ) {
    sentence += "\n\n";
    sentence += "*At least one resident of household must be 55 or older, no one under 18 (with limited exception), and additional restrictions apply. Some residents may be younger than 55 in limited circumstances. For terms, conditions and restrictions regarding requirements for permanent residents and guests, please see a Taylor Morrison Community Sales Manager for complete details. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	
		if (disclaimerOption === "yes" && location === "madeiraranch" ) {
    sentence += "\n\n";
    sentence += "*At least one resident of household must be 55 or older, no one under 18 (with limited exception), and additional restrictions apply. Some residents may be younger than 55 in limited circumstances. For terms, conditions and restrictions regarding requirements for permanent residents and guests, please see a Taylor Morrison Community Sales Manager for complete details. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
			if (disclaimerOption === "yes" && location === "northgate" ) {
    sentence += "\n\n";
    sentence += "*Esplanade at Northgate is permanent occupancy of each residence by at least one person 55 years of age or older in compliance with all applicable state and federal laws, as well as the Community's Declaration. Some residents may be younger under very limited circumstances and no one under 19 years of age in permanent residency. Complete details available. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	
				if (disclaimerOption === "yes" && location === "oaktree" ) {
    sentence += "\n\n";
    sentence += "*Ovation at Oak Tree is an age-qualified community intended for permanent occupancy of each residence by at least one person 55 years of age or older in compliance with all applicable state and federal laws, as well as the Community's Declaration. Some residents may be younger under very limited circumstances and no one under 18 years of age in permanent residency. Complete details available. All information (including, but not limited to prices, views, availability, school assignments and ratings, incentives, floor plans, site plans, features, standards and options, assessments, and fees, planned amenities, programs, conceptual artists' renderings, tax rates and community development plans) is not guaranteed and remains subject to change, or delay without notice.  ";
  }
	
	
	

	
	
  if (esVideo === "yes") {
    sentence += "\n\n";
    sentence += "Esplanade® Video is not specific to the above Community and is intended to represent Taylor Morrison’s Esplanade® lifestyle brand; amenities and features will vary by community.";
  }
	
	
  if (StockPhotosOption === "yes") {
    sentence += "\n\n";
    sentence += "\n\n";
    sentence += "Images do not reflect a racial, ethnic or familial status preference.";
  }


  if (prdocutPhotosOption === "yes") {
    sentence += "\n\n";
    sentence += "Representative Photos above for illustrative purposes only of available plans, features and structural option ideas; not necessarily the actual community or the actual homes that will be available. ";
  }

  if (renderingOption === "yes") {
    sentence += "\n\n";
    sentence += "Elevations and renderings are an artist’s conception and are not intended to show specific detailing.";
  }

  if (floorPlan === "yes") {
    sentence += "\n\n";
    sentence += "Floor plans square footage and dimensions are estimated and may vary in actual construction. As-Built Condition will control. All plans are the exclusive property of Taylor Morrison, Inc. and its affiliates and are protected by U.S. copyright laws. ";
  }

  if (virtualTour === "yes") {
    sentence += "\n\n";
    sentence += "Virtual Tours of any homes are deemed reliable but not guaranteed as of the date indicated and are representative of the specific lots and plans at this community. As-Built plans control. There is no substitution for a personal tour to fully appreciate each home's unique characteristics, as well as the adjacent and surrounding features, current views and amenities.";
  }

   if (neighborMap === "yes") {
    sentence += "\n\n";
    sentence += "Neighborhood Map is intended for informational purposes only without guarantee and represents an artist’s conceptual depiction of the existing and/or planned neighborhood merchants, facilities and services that remain subject to change. Contact each venue directly for details. Status of lot availability in this sitemap remains subject to change and is not guaranteed.";
  }
	
  if (quickMovein === "yes") {
    sentence += "\n\n";
    sentence += "Quick Move-In Home prices exclude furniture, decorative accessories, as well as closing costs and will include any lot premium, Seller installed options and upgrades; Buyer-selected options will not be available on quick move-in homes. Quick Move-In Homes will be subject to prior sale.";
  }

  if (qmipricingInfo === "yes") {
    sentence += "\n\n";
    sentence += "Featured Home current price shown above excludes closing costs and already includes any lot premium, Seller installed options and upgrades; Buyer-selected options are no longer available. Featured Home subject to prior sale. Community Association or other fees may be required.";
  }


	if (tbbpricingInfo === "yes") {
    sentence += "\n\n";
    sentence += "Price(s) shown may not reflect lot premiums, upgrades and options depending on stage of construction. All homes are subject to prior sale.";
  }

	
	if (siteMap === "yes") {
    sentence += "\n\n";
    sentence += "Maps and plans are not to scale, all dimensions are approximate and may vary in actual construction. Community improvements, recreational features and amenities described are based upon current development plans which are subject to change and under no obligation to be completed. Once released, all lots shown on Site Map subject to prior sale.";
  }
	
  if (locationLocation === "yes") {
    sentence += "\n\n";
    sentence += "Any reference to amenities, attractions, local events and services outside of the Community are provided for general informational purposes only without guarantee and represents a non-exhaustive summary of existing and/or planned neighborhood merchants, facilities and services that remain subject to change outside of Taylor Morrison’s control. All homes subject to prior sale. ";
  }
	
	

  if (tmAmenity === "yes") {
    sentence += "\n\n";
    sentence += "Any community improvements, recreational features and amenities described are based upon current development plans, which are subject to change and under no obligation to be completed. Any reference to amenities, attractions and services outside of the Community are provided for general informational purposes only without guarantee and represents a non-exhaustive summary of existing and/or planned neighborhood merchants, facilities and services that remain subject to change. ";
  }
	

	if (tmFinal === "yes") {
    sentence += "\n\n";
    sentence += "Any reference to the Community’s current pending “closeout/final phase” status is defined to include homes that have either closed or are still under contract and such information on homes not yet closed remains subject to change daily.";
  }


	
	
	
//  if (fiftyfiveCommunity === "yes") {
//    sentence += "\n\n";
//    sentence += "At least one resident of household must be 55 or older, and additional restrictions apply. Some residents may be younger than 55 and no one under 19 in permanent residency.";
//  }


	
		
// TMHF if tmhf is "yes"
    if (location === "tradition" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location FL: MLD1920. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org.";
    }
	else if (location === "solivita" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location FL: MLD1920. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org.";
    }
	else if (location === "wiregrass" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location FL: MLD1920. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org.";
    }
	
	
	else if (location === "bonterra" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: TX: #8588| www.nmlsconsumeraccess.org. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org.";
    }
	
   else if (location === "vizcaya" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: TX: #8588| www.nmlsconsumeraccess.org. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org.";
    }
	
	
	else if (location === "cantamia" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: AZ: #0917436. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org.";
    }
	
		else if (location === "meridian" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: AZ: #0917436. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org.";
    }
	
		else if (location === "mountainfall" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: NV: #3938 (branch located at 1820 Festival Plaza Dr, Ste. 220A, Las Vegas, NV 89135 PH# 702-680-1085) (“Affiliated Lender”).. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
		else if (location === "summerbend" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: CA: DFPI #4130023| www.nmlsconsumeraccess.org. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org.";
    }
	
		else if (location === "turkeycreek" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: CA: DFPI #4130023| www.nmlsconsumeraccess.org. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
		else if (location === "madeiraranch" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: CA: DFPI #4130023| www.nmlsconsumeraccess.org. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
		else if (location === "northgate" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc. NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751. Licensed locations: NC: #L-191654 | SC: #MLS-8588. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
		else if (location === "oaktree" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed locations: WA: #CL-8588 |www.nmlsconsumeraccess.org. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
		else if (location === "lasvegas" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: NV: #3938 (branch located at 1820 Festival Plaza Dr, Ste. 220A, Las Vegas, NV 89135 PH# 702-680-1085) (“Affiliated Lender”).. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
	else if (location === "phoenix" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: AZ: #0917436. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
	else if (location === "portland" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: OR: #ML-4272. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
	else if (location === "seattle" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed locations: WA: #CL-8588 |www.nmlsconsumeraccess.org. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
	else if (location === "atlanta" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc. NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751. Licensed location: GA: #52654. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
	else if (location === "charlotte" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc. NMLS #8588, 495 North Keller Road, Suite 550, Maitland, FL 32751. Licensed locations: NC: #L-191654 | SC: #MLS-8588. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
	else if (location === "raleigh" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc., NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed locations: OR: #ML-4272. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
	else if (location === "corp" && tmhfOption === "yes") {
        sentence += "\n\n*Taylor Morrison Home Funding, Inc. (“Affiliated Lender”), NMLS # 8588, 495 North Keller Road, Suite 550, Maitland, FL 32751, Licensed location: AZ: #0917436 | CA: DFPI #4130023 | CO: Registration #8588, PH# (866) 379-5390 | FL: MLD1920 | GA: #52654 | NV: #3938 (branch located at 1820 Festival Plaza Dr., Ste. 220A, Las Vegas, NV 89135 PH# (702) 680-1085)| NC: #L-191654 | OR: #ML-4272 | SC: #MLS-8588 | TX: #8588 | WA: #CL-8588. Buyer is not required to finance through Affiliated Lender to purchase a home; however, buyer must elect to utilize the services of Affiliated Lender and the services of Closing Agent  suggested by Seller only to receive certain promoted incentives as outlined in Buyer’s specific Purchase Agreement, which may differ by time, home selected, community and jurisdiction or contain other qualifying criteria. All loans are subject to underwriting and loan qualification of the lender. Services not available in all states. Rates, terms and conditions offered are subject to change without notice. Additional license information available at NMLS Consumer Access: www.nmlsconsumeraccess.org. ";
    }
	
		

	
// Entity Info"	

  if (location === "tradition") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison of Florida, Inc. CGC1529148, CBC1257822 & CBC1259457. The Esplanade® name and logo owned by Esplanade Resort Experiences, LLC are federally registered and used with its express permission. All rights reserved.";
  } else if (location === "wiregrass") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison of Florida, Inc., CRC1328617 & CGC1537334 (" +'"'+"Sponsor"+'"' + "). The Esplanade® name and logo owned by Esplanade Resort Experiences, LLC are federally registered and used with its express permission." ;
  } else if (location === "solivita") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "." ;
  } else if (location === "meridian") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "William Lyon Homes, Inc., ROC # 080777. © January 2024, William Lyon Southwest, Inc., AZ DRE # CO521011000. ";
  } else if (location === "mountainfall") {
    sentence += "\n\n";
    sentence += "No offer to sell or lease any property until submittal of the Public Offering Statement for the above-described Property to the Nevada Real Estate Division. Complete details available. This is not an offering in any state where prohibited or otherwise restricted by law. Please visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable) and information about active Las Vegas-area communities." + copyrightYear + "Robert Evon, Sales Manager #BS.0029612.SMGR; William Lyon Homes, Inc. dba Taylor Morrison, NSCL #0040722. All rights reserved.";
  } else if (location === "summerbend") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison Services, Inc., DRE #00968975; CSLB License #519465, Taylor Morrison of California, LLC. The Esplanade® name and logo are federally registered. All rights reserved.";
  } else if (location === "turkeycreek") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison Services, Inc., DRE # 00968975., Taylor Morrison of California, LLC. The Esplanade® name and logo owned by Esplanade Resort Experiences, LLC are federally registered and used with its express permission.";
  } else if (location === "madeiraranch") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison Services, Inc., DRE # 00968975. Taylor Morrison of California, LLC. The Esplanade® name and logo owned by Esplanade Resort Experiences, LLC are federally registered and used with its express permission.";
  } else if (location === "northgate") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison of Carolinas, Inc. NCGCL #76596. The Esplanade® name and logo owned by Esplanade Resort Experiences, LLC are federally registered and used with its express permission. ";
  } else if (location === "oaktree") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison Northwest, LLC #TAYLOMN791L8. Broker license: Cascadian King Company LLC #8193.";
  } else if (location === "lasvegas") {
    sentence += "\n\n";
    sentence += "No offer to sell or lease any property until submittal of the Public Offering Statement for the above-described Property to the Nevada Real Estate Division. Complete details available. This is not an offering in any state where prohibited or otherwise restricted by law. Please visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable) and information about active Las Vegas-area communities." + copyrightYear + "Robert Evon, Sales Manager #BS.0029612.SMGR; William Lyon Homes, Inc. dba Taylor Morrison, NSCL #0040722. Taylor Morrison of Nevada, LLC; William Renteria, Broker, Lic. # B.0146240.LLC. All rights reserved.";
  } else if (location === "phoenix") {
    sentence += "\n\n";
    sentence += "No offer to sell or lease may be made or accepted prior to the issuance of the final AZ Subdivision Disclosure Report. A public report is available at the State Real Estate Department’s website at www.azre.gov for the property of interest that is now open for sales. Please see a Community Sales Manager for details or visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "TM Homes of Arizona, Inc., AZ DRE # CO535669000; AV Homes of Arizona, LLC, AZ DRE # LC632206000; William Lyon Southwest, Inc., AZ DRE # CO521011000. All rights reserved.";
  } else if (location === "portland") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Cascadian South L.L.C., Oregon Real Estate License No. 950300179; Taylor Morrison Northwest, LLC, Oregon CCB License No. 204238; South Cooper Mountain Owner, LLC, Oregon CCB License No. 222618; Cascadian King Company LLC, Washington Real Estate License No. 8193; Taylor Morrison Northwest, LLC, Washington License No. TAYLOMN791L8. All rights reserved.";
  } else if (location === "seattle") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison Northwest, LLC WA Contractor License #TAYLOMN791L8. Broker license: Cascadian King Company LLC #8193. All rights reserved.";
  } else if (location === "atlanta") {
    sentence += "\n\n";
    sentence +=  "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison Realty of Georgia, Inc. Firm #75069. Taylor Morrison of Georgia, LLC. All rights reserved. ";
  } else if (location === "charlotte") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison of Carolinas, Inc., License No. 125194, NCGCL #76596, All rights reserved.";
  } else if (location === "raleigh") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison of Carolinas, Inc., NCGCL #76596. AV Homes of Raleigh, LLC, NCGCL #79166. All rights reserved.";
  } else if (location === "bonterra") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison of Texas, Inc. All rights reserved.";
  } else if (location === "vizcaya") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison of Texas, Inc. All rights reserved.";
  } else if (location === "cantamia") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "JCH Construction, LLC, ROC# 256789. AV Homes of Arizona, LLC, AZ DRE# LC632206000. All rights reserved.";
  }
		else if (location === "corp") {
    sentence += "\n\n";
    sentence += "This is not an offering in any state where prohibited or otherwise restricted by law. Please see a Taylor Morrison Community Sales Manager for details and visit www.taylormorrison.com for additional state and community specific disclaimers, licensing information and other details (as applicable). " + copyrightYear + "Taylor Morrison, Inc. All rights reserved.";
  }
	

  //else if (location === "vizcaya" || location === "cantamia" || location === "bonterra") {
  //    sentence += "\n\n";
  //    sentence += copyrightYear + "Taylor Morrison of Texas, Inc. All rights reserved.";
  //}



	
  document.getElementById("result").value = sentence;

  // Remove the divider element
  var dividerElements = document.querySelectorAll('.line');
  dividerElements.forEach(function (dividerElement) {
    dividerElement.style.display = 'none';
  });

}

function copyToClipboard() {
  // Get the textarea element containing the generated disclaimer
  var disclaimerText = document.getElementById("result");

  // Select the text within the textarea
  disclaimerText.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  disclaimerText.setSelectionRange(0, 0);

  // Provide some user feedback (e.g., alert or message)
  alert("Disclaimer copied to clipboard!");
}


function selectAllYes() {

  // Clear the content of the #result textarea
  document.getElementById('result').value = '';


  var yesOptions = document.querySelectorAll('input[type="radio"][value="yes"]');

  // Loop through all "Yes" options and set them to checked
  for (var i = 0; i < yesOptions.length; i++) {
    yesOptions[i].checked = true;
  }

  // Toggle the buttons
  document.querySelector('.checkmark-button.yes').classList.add('active');
  document.querySelector('.checkmark-button.no').classList.remove('active');

  // Show all questions
  var questions = document.querySelectorAll('.question');
  for (var i = 0; i < questions.length; i++) {
    questions[i].style.display = 'block';

    var dividerElements = document.querySelectorAll('.line');
    dividerElements.forEach(function (dividerElement) {
      dividerElement.style.display = 'block';
    });

  }


}

function selectAllNo() {
  var noOptions = document.querySelectorAll('input[type="radio"][value="no"]');

  // Loop through all "No" options and set them to checked
  for (var i = 0; i < noOptions.length; i++) {
    noOptions[i].checked = true;
  }

  // Toggle the buttons
  document.querySelector('.checkmark-button.no').classList.add('active');
  document.querySelector('.checkmark-button.yes').classList.remove('active');
}



