const { createTransport } = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER,BACK_URL } = process.env

function createClient() {
    return new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

function getTransport(client) { 
    const accessToken = client.getAccessToken() 
    return createTransport({
        service: 'gmail',   
        auth: {             
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false }
    })
}

function getEmailBody(mail,code,host) { 
    return `
        <div>
        <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
	<!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		@media (max-width:620px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-5 .column-1 .block-1.paragraph_block td.pad>div,
			.row-5 .column-1 .block-3.paragraph_block td.pad>div,
			.row-7 .column-1 .block-4.paragraph_block td.pad>div,
			.row-7 .column-2 .block-4.paragraph_block td.pad>div,
			.row-8 .column-1 .block-4.paragraph_block td.pad>div,
			.row-8 .column-2 .block-4.paragraph_block td.pad>div {
				font-size: 16px !important;
			}

			.row-5 .column-1 .block-2.paragraph_block td.pad>div,
			.row-6 .column-1 .block-3.paragraph_block td.pad>div {
				font-size: 28px !important;
			}

			.row-3 .column-1 .block-2.paragraph_block td.pad>div {
				font-size: 20px !important;
			}

			.row-3 .column-1 .block-1.paragraph_block td.pad>div {
				font-size: 30px !important;
			}

			.row-1 .column-1 .block-1.paragraph_block td.pad {
				padding: 0 15px !important;
			}

			.row-5 .column-1 .block-4.paragraph_block td.pad>div {
				font-size: 12px !important;
			}

			.row-6 .column-1 .block-2.paragraph_block td.pad>div,
			.row-7 .column-1 .block-3.paragraph_block td.pad>div,
			.row-7 .column-2 .block-3.paragraph_block td.pad>div,
			.row-8 .column-1 .block-3.paragraph_block td.pad>div,
			.row-8 .column-2 .block-3.paragraph_block td.pad>div {
				font-size: 18px !important;
			}

			.row-5 .column-1 {
				padding: 25px 20px 30px !important;
			}

			.row-8 .column-1 {
				padding: 5px 0 20px !important;
			}

			.row-11 .column-1 {
				padding: 5px 30px !important;
			}

			.row-11 .column-2 {
				padding: 5px 30px 20px !important;
			}
		}
	</style>
</head>

<body style="background-color: #0c1312; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0c1312;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #205057; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 10px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:11px;font-weight:400;letter-spacing:3px;line-height:120%;text-align:center;mso-line-height-alt:13.2px;">
																	<p style="margin: 0;">This account is protected by an email authenticator</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:15px;padding-top:20px;width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center" style="line-height:10px"><a href="https://www.example.com/" target="_blank" style="outline:none" tabindex="-1"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/914545_898888/editor_images/logo-png.png" style="display: block; height: auto; border: 0; width: 210px; max-width: 100%;" width="210" alt="Placeholder logo" title="Placeholder logo"></a></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:15px;">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:29px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:34.8px;">
																	<p style="margin: 0;">Welcome !</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#e9d5e2;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:35px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:42px;">
																	<p style="margin: 0;">The world is in your hands!</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/914545_898888/editor_images/HD-wallpaper-video-games-collage-games.jpg" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" width="600"></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #151719; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 25px; padding-bottom: 30px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;">MAKE SOME NOISE!</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-top:5px;">
																<div style="color:#01dad0;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:32px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:38.4px;">
																	<p style="margin: 0;">BIG SYNTH SALE</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;">SAVE ON EXCLUSIVE SALES AND OPEN-BOX DEALS</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:35px;padding-top:5px;">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
																	<p style="margin: 0;"><em>OFFER VALID ONLY ON JAN. 25<sup>TH</sup>, 2022</em></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1f373b; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:30px;">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;">Just for you</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:32px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:38.4px;">
																	<p style="margin: 0;">SPECIAL OFFERS</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1f373b; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:35px;padding-left:35px;padding-right:35px;padding-top:40px;width:100%;">
																<div class="alignment" align="center" style="line-height:10px"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/914545_898888/editor_images/header.jpg" style="display: block; height: auto; border: 0; width: 230px; max-width: 100%;" width="230" alt="MIDI controller" title="MIDI controller"></div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;">Assassin'S Creed VALHALLA</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-top:5px;">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;"><em>15% Off</em></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:35px;padding-left:35px;padding-right:35px;padding-top:40px;width:100%;">
																<div class="alignment" align="center" style="line-height:10px"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/914545_898888/editor_images/header1.jpg" style="display: block; height: auto; border: 0; width: 230px; max-width: 100%;" width="230" alt="Semi modulars" title="Semi modulars"></div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;">Red Dead Redemption II</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-top:5px;">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;"><em>10% Off</em></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1f373b; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:35px;padding-left:35px;padding-right:35px;padding-top:40px;width:100%;">
																<div class="alignment" align="center" style="line-height:10px"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/914545_898888/editor_images/header3.jpg" style="display: block; height: auto; border: 0; width: 230px; max-width: 100%;" width="230" alt="Dj mixers and turntables" title="Dj mixers and turntables"></div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;">CoD MW</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:20px;padding-top:5px;">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;"><em>10% Off</em></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:35px;padding-left:35px;padding-right:35px;padding-top:40px;width:100%;">
																<div class="alignment" align="center" style="line-height:10px"><img src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/914545_898888/editor_images/header_1.jpg" style="display: block; height: auto; border: 0; width: 230px; max-width: 100%;" width="230" alt="Samplers" title="Samplers"></div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;">GTA V</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-top:5px;">
																<div style="color:#ffffff;direction:ltr;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;"><em>15% Off</em></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #151719; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 30px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="button_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:25px;padding-top:45px;text-align:center;">
																<div class="alignment" align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:74px;width:320px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#1f373b; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://localhost:8080/auth/verify/${code}"  target="_blank" style="text-decoration:none;display:inline-block;color:#1f373b;background-color:#ffffff;border-radius:0px;width:auto;border-top:0px solid transparent;font-weight:700;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">   
                                                                    Please, press here to verify your account.
                                                                </a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #151515; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 20px; padding-right: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="html_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-top:5px;padding-bottom:5px;">
																<div style="font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;" align="center"><div style="height:20px;">&nbsp;</div></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 20px; padding-right: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;">
																<div style="font-family: Arial, sans-serif">
																	<div class style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #C0C0C0; line-height: 1.2;">
																		<p style="margin: 0; mso-line-height-alt: 14.399999999999999px;"><span style="color:#c0c0c0;">Copyright © 2022 Your Business, All rights reserved.</span></p>
																		<p style="margin: 0; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
																		<p style="margin: 0; mso-line-height-alt: 14.399999999999999px;"><span style="color:#c0c0c0;">Want to change how you receive these emails?</span><br><span style="color:#c0c0c0;">You can <a href="https://www.example.com/" target="_blank" rel="noopener" style="color:#c0c0c0;"><span style="color:#ffffff;">update your preferences</span></a> or <a href="https://www.example.com/" target="_blank" rel="noopener" style="color:#c0c0c0;"><span style="color:#ffffff;">unsubscribe</span></a> from this list.</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="alignment" style="vertical-align: middle; text-align: center;">
																			<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																			<!--[if !vml]><!-->
																			<table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
																				<!--<![endif]-->
																				<tr>
																					<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																					<td style="font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
        `
}

const accountVerificationEmail = async (mailOfNewUser,codeCalculedWithCrypto) => {
    const client = createClient() 
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH }) 
    const transport = getTransport(client) 
    const mailOptions = {
        from: GOOGLE_USER,
        to: mailOfNewUser,
        subject: 'Verify your new account in GameCenter',
        html: getEmailBody(mailOfNewUser,codeCalculedWithCrypto,BACK_URL)
    }
    await transport.sendMail(
        mailOptions,
        (error, response) => {
            if (error) {
                console.error(error)
                return
            }
            console.log('Email sent!')
        }
    )
}

module.exports = accountVerificationEmail